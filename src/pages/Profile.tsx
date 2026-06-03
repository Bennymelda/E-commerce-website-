import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

import { FaUserCircle, FaEdit } from "react-icons/fa";
import { FaBox, FaCartShopping, FaRegHeart } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { GrFormNextLink } from "react-icons/gr";
import { useWishlist } from "../hooks/useWishlist";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
};

type User = {
  name?: string;
  email?: string;
  createdAt?: string;
  orderCount?: number;
  wishlistCount?: number;
  [key: string]: unknown;
};

type NavItemProps = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  danger?: boolean;
};

function NavItem({ icon, label, onClick, danger = false }: NavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full flex items-center justify-between px-4 py-3.5 rounded-xl
        transition-all duration-150 group
        ${
          danger
            ? "hover:bg-red-50 dark:hover:bg-red-950/30"
            : "hover:bg-green-50 dark:hover:bg-zinc-800"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <span
          className={`
            text-xl p-2 rounded-lg
            ${
              danger
                ? "text-red-500 bg-red-50 dark:bg-red-950/30"
                : "text-green-600 bg-green-50 dark:bg-green-950/40"
            }
          `}
        >
          {icon}
        </span>
        <span
          className={`font-medium ${danger ? "text-red-600 dark:text-red-400" : "text-gray-700 dark:text-gray-200"}`}
        >
          {label}
        </span>
      </div>
      <GrFormNextLink
        className={`text-xl transition-transform group-hover:translate-x-1 ${danger ? "text-red-400" : "text-gray-400"}`}
      />
    </button>
  );
}

export default function ProfilePage() {
 const navigate = useNavigate();
 const { clearCart } = useCart();

 const [user, setUser] = useState<User | null>(() => {
   const stored = localStorage.getItem("currentUser");
   return stored ? (JSON.parse(stored) as User) : null;
 });
 const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
 const [installMessage, setInstallMessage] = useState<string>("");

 useEffect(() => {
   const handleBeforeInstallPrompt = (event: Event) => {
     event.preventDefault();
     setDeferredPrompt(event as BeforeInstallPromptEvent);
     setInstallMessage("");
   };

   const handleAppInstalled = () => {
     setInstallMessage("✓ App installed successfully! You can now use it offline.");
     setDeferredPrompt(null);
   };

   window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener);
   window.addEventListener("appinstalled", handleAppInstalled);

   return () => {
     window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener);
     window.removeEventListener("appinstalled", handleAppInstalled);
   };
 }, []);

 const handleInstallApp = async () => {
   if (deferredPrompt) {
     try {
       deferredPrompt.prompt();
       const choiceResult = await deferredPrompt.userChoice;

       if (choiceResult.outcome === "accepted") {
         setInstallMessage("✓ Installation started...");
       } else {
         setInstallMessage("Installation was dismissed. You can try again anytime.");
       }

       setDeferredPrompt(null);
     } catch (error) {
       console.error("Install prompt error:", error);
       setInstallMessage("Please use your browser menu to install.");
     }
   } else {
     const ua = navigator.userAgent.toLowerCase();
     const isIOS = /iphone|ipad|ipod/.test(ua);
     const isAndroid = /android/.test(ua);

     if (isIOS) {
       setInstallMessage("📱 iOS: Tap Share icon on your screen (square with an arrow pointing up)(↗) → Tap Add to Home Screen");
     } else if (isAndroid) {
       setInstallMessage("📱 Android: Tap menu (⋮) → Install app or Add to Home screen");
     } else {
       setInstallMessage("💻 Desktop: Click menu (⋮) → Install app");
     }
   }
 };

const getMemberDuration = (dateString: string) => {
 const start = new Date(dateString);
 const now = new Date();

 const months =
 (now.getFullYear() - start.getFullYear()) * 12 +
 (now.getMonth() - start.getMonth());

 if (months < 1) return "Less than a month";
 if (months === 1) return "1 month";
 return `${months} months`;
};
 const [openEdit, setOpenEdit] = useState(false);
 const [name, setName] = useState(user?.name ?? "");
const orders = JSON.parse(
 localStorage.getItem("orders") || "[]"
);

const { wishlist } = useWishlist();

const stats = [
 { label: "Orders", value: orders.length },
 { label: "Wishlist", value: wishlist.length },
];
 if (!user) {
 return (
 <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
 <div className="text-center">
 <FaUserCircle className="text-6xl text-gray-300 dark:text-zinc-700 mx-auto mb-4" />
 <p className="text-gray-500 dark:text-gray-400 text-lg">
 Please login to view your profile
 </p>
 <button
 onClick={() => navigate("/login")}
 className="mt-4 px-6 py-2 cursor-pointer bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
 >
 Go to Login
 </button>
 </div>
 </div>
 );
 }

 const saveProfile = () => {
   const updatedUser = { ...user, name };
   localStorage.setItem("currentUser", JSON.stringify(updatedUser));
   setUser(updatedUser);
   setOpenEdit(false);
 };

 const logout = () => {
 localStorage.removeItem("currentUser");
 navigate("/login");
 };

 const getInitials = (n: string) =>
   n
     .split(" ")
     .map((w) => w[0])
     .join("")
     .toUpperCase()
     .slice(0, 2);

 return (
 <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 mb-20 pt-6 pb-16 px-4 md:px-8 md:mt-16">
 <div className="max-w-5xl mx-auto">

 {/* ── HEADER CARD ── */}
 <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm overflow-hidden mb-6">
 {/* Banner strip */}
 <div className="h-24 bg-linear-to-r from-green-500 to-emerald-600 relative">
 <div className="absolute inset-0 opacity-20"
 style={{
 backgroundImage:
 "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
 backgroundSize: "40px 40px",
 }}
 />
 </div>

 <div className="px-6 pb-6 -mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
 {/* Avatar + info */}
 <div className="flex items-end gap-4">
 <div className="w-20 h-28 rounded-2xl bg-green-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white dark:border-zinc-900">
 {getInitials(user.name || user.email || "User")}
 </div>
 <div className="mb-1">
 <h1 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
 {user.name}
 </h1>
 <p className="text-gray-500 dark:text-gray-400 text-sm">
 {user.email}
 </p>
 </div>
 </div>

 <button
 onClick={() => setOpenEdit(true)}
 className="flex items-center gap-2 text-sm font-semibold text-green-600 border border-green-200 dark:border-green-800 px-4 py-2 rounded-xl hover:bg-green-50 dark:hover:bg-green-950/40 transition-colors self-start md:self-auto"
 >
 <FaEdit className="text-base" />
 Edit Profile
 </button>
 </div>
 </div>

 {/* ── TWO-COLUMN BODY ── */}
 <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

 {/* LEFT — Quick Links (3 cols) */}
 <div className="md:col-span-3 space-y-3">
 <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-1 mb-2">
 My Account
 </h2>

 <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm divide-y divide-gray-100 dark:divide-zinc-800 overflow-hidden">
 <NavItem
 icon={<FaRegHeart />}
 label="Wishlist"
 onClick={() => navigate("/wishlist")}
 />
 <NavItem
 icon={<FaBox />}
 label="Orders"
 onClick={() => navigate("/orders")}
 />
 <NavItem
 icon={<FaCartShopping />}
 label="Cart"
 onClick={() => navigate("/cart-page")}
 />
 <NavItem
 icon={<FiDownload />}
 label="Install App"
 onClick={handleInstallApp}
 />
 {installMessage ? (
   <div className="px-4 py-3 text-sm text-green-700 dark:text-blue-300 bg-green-50 dark:bg-blue-950/30 rounded-xl mt-3 border border-blue-200 dark:border-blue-800">
     {installMessage}
   </div>
 ) : (
   <div className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 rounded-xl mt-3">
     📲 <strong>How to install:</strong> Click "Install App" and follow the browser prompt, or use your browser menu to add this app to your home screen for easy access.
   </div>
 )}
 </div>

 <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-1 mt-5 mb-2">
 Danger Zone
 </h2>

 <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm divide-y divide-gray-100 dark:divide-zinc-800 overflow-hidden">
 <NavItem
 icon={<MdDelete />}
 label="Clear Cart"
 onClick={clearCart}
 danger
 />
 <NavItem
 icon={<CiLogout />}
 label="Logout"
 onClick={logout}
 danger
 />
 </div>
 </div>

 {/* RIGHT — Info Panel (2 cols) */}
 <div className="md:col-span-2 space-y-4">
 <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-1 mb-2">
 Profile Info
 </h2>

 <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-5 space-y-4">
 <div>
 <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
 Full Name
 </p>
 <p className="text-gray-800 dark:text-white font-medium">
 {user.name}
 </p>
 </div>
 <div className="h-px bg-gray-100 dark:bg-zinc-800" />
 <div>
 <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
 Email Address
 </p>
 <p className="text-gray-800 dark:text-white font-medium break-all">
 {user.email}
 </p>
 </div>
 <div className="h-px bg-gray-100 dark:bg-zinc-800" />
 <div>
 <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
 Member Since
 <p className="text-gray-800 dark:text-white font-medium">
 {user.createdAt
 ? `Member for ${getMemberDuration(user.createdAt)}`
 : "—"}
</p>
 </p>
 </div>
 </div>

 {/* Activity summary card */}
 <div className="bg-green-600 rounded-2xl p-5 text-white">
 <p className="text-green-100 text-xs font-semibold uppercase tracking-widest mb-3">
 Activity
 </p>
 <div className="grid grid-cols-2 gap-4">
 {stats.map(({ label, value }) => (
 <div key={label} className="bg-white/15 rounded-xl p-3 text-center">
 <p className="text-2xl font-bold">{value}</p>
 <p className="text-green-100 text-xs mt-0.5">{label}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* ── EDIT MODAL ── */}
 {openEdit && (
 <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-50">
 <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl w-full max-w-md shadow-2xl">
 <h2 className="text-xl font-bold mb-1 dark:text-white">Edit Profile</h2>
 <p className="text-gray-400 text-sm mb-5">Update your display name</p>

 <label className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1 block">
 Full Name
 </label>
 <input
 value={name}
 onChange={(e) => setName(e.target.value)}
 className="
 w-full border border-gray-200 rounded-xl bg-gray-50
 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600
 mb-5 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
 "
 placeholder="Your name"
 />

 <div className="flex gap-3">
 <button
 onClick={() => setOpenEdit(false)}
 className="cursor-pointer flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
 >
 Cancel
 </button>
 <button
 onClick={saveProfile}
 className="cursor-pointer flex-1 font-semibold bg-green-600 hover:bg-green-700 transition-colors text-white py-2.5 rounded-xl"
 >
 Save Changes
 </button>
 </div>
 </div>
 </div>
 )}
 </div>
 );
}