import { r as reactExports, V as jsxRuntimeExports } from "./server-InY6yCPf.js";
import { c as createLucideIcon, B as Button, t as toast, b as useNavigate, u as useAuth, o as useCatalog, k as useCampus, w as useWishlist, x as fetchListingsBySeller, y as conversations, L as Link, m as motion, S as ShoppingBag, P as PRODUCT_CATEGORIES, z as createListing } from "./router-B763mWGC.js";
import { u as useUpdateUserProfile, D as Dialog, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription, f as DialogFooter, g as useCurrentUserProfile, h as buildFallbackUserProfile, N as Navbar, H as Heart, B as BadgeCheck } from "./navbar-D1XcfPQY.js";
import { F as Footer } from "./footer-Dmm9X49a.js";
import { F as FileText } from "./file-text-BAm1y2Nc.js";
import { G as GraduationCap } from "./graduation-cap-BjcoTy4G.js";
import { P as Plus } from "./plus-DgpUNS0T.js";
import { M as MessageCircle } from "./message-circle-C-RWDSEg.js";
import { T as TrendingUp } from "./trending-up-D-1yCYV9.js";
import { R as RotateCcw } from "./rotate-ccw-CMRNlrL9.js";
import "node:async_hooks";
import "./worker-entry-DE8uvRpa.js";
import "node:events";
import "timers/promises";
import "timers";
import "fs";
import "http";
import "stream";
import "events";
import "util";
import "dns";
import "url";
import "zlib";
import "net";
import "fs/promises";
import "tls";
import "node:stream/web";
import "node:stream";
import "./theme-toggle-DCgUgpdc.js";
import "./economy-B76-Rikm.js";
const Building2 = createLucideIcon("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
const CalendarDays = createLucideIcon("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);
const LoaderCircle = createLucideIcon("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const Package = createLucideIcon("Package", [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
]);
const Pen = createLucideIcon("Pen", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
]);
const Save = createLucideIcon("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);
function formatProfileDate(value) {
  if (value === null || value === void 0 || value === "") return "Unknown";
  const numeric = typeof value === "number" ? value : Number(value);
  const parsed = Number.isFinite(numeric) && numeric > 1e12 ? new Date(numeric) : new Date(String(value));
  if (Number.isNaN(parsed.getTime())) return String(value);
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(parsed);
}
function AccountOverview({ profile }) {
  const email = profile?.email ?? "No email on file";
  const [editOpen, setEditOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    displayName: "",
    bio: "",
    collegeName: "",
    major: ""
  });
  const { mutate: updateProfile, isPending: saving } = useUpdateUserProfile();
  reactExports.useEffect(() => {
    if (editOpen && profile) {
      setForm({
        displayName: profile.displayName ?? "",
        bio: profile.bio ?? "",
        collegeName: profile.collegeName ?? "",
        major: profile.major ?? ""
      });
    }
  }, [editOpen, profile]);
  const handleSave = () => {
    updateProfile(form, {
      onSuccess: () => {
        toast.success("Profile updated successfully!");
        setEditOpen(false);
      },
      onError: (err) => {
        toast.error(err.message || "Failed to update profile.");
      }
    });
  };
  const infoCards = [
    { label: "Email", value: email },
    { label: "Member since", value: formatProfileDate(profile?.createdAt) },
    { label: "Last login", value: formatProfileDate(profile?.lastLoginAt) },
    {
      label: "Verification",
      value: profile?.emailVerified ? "Email verified" : "Verification pending"
    }
  ];
  const extraCards = [
    {
      label: "Bio",
      value: profile?.bio || "Not set yet",
      icon: FileText,
      empty: !profile?.bio
    },
    {
      label: "College",
      value: profile?.collegeName || "Not set yet",
      icon: Building2,
      empty: !profile?.collegeName
    },
    {
      label: "Major",
      value: profile?.major || "Not set yet",
      icon: GraduationCap,
      empty: !profile?.major
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Account overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your synced profile and login details" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "rounded-full",
          onClick: () => setEditOpen(true),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "mr-1.5 h-3.5 w-3.5" }),
            " Edit Profile"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: infoCards.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/30 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground", children: item.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "mt-2 text-sm font-medium text-foreground break-words",
          "data-testid": `account-${item.label.replace(/\s+/g, "-")}`,
          children: item.value
        }
      )
    ] }, item.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-4 md:grid-cols-3", children: extraCards.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/30 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-3.5 w-3.5" }),
        item.label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `mt-2 text-sm font-medium break-words ${item.empty ? "text-muted-foreground italic" : "text-foreground"}`,
          children: item.value
        }
      )
    ] }, item.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: editOpen, onOpenChange: setEditOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[90vh] overflow-y-auto sm:max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Edit Profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Update your profile details. Changes are saved to the database and will appear across the platform." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs font-semibold text-muted-foreground", children: [
          "Display Name",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: form.displayName,
              onChange: (e) => setForm((f) => ({ ...f, displayName: e.target.value })),
              className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary",
              placeholder: "Your name"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs font-semibold text-muted-foreground", children: [
          "College / University",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: form.collegeName,
              onChange: (e) => setForm((f) => ({ ...f, collegeName: e.target.value })),
              className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary",
              placeholder: "e.g. MANIT Bhopal"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs font-semibold text-muted-foreground", children: [
          "Major / Branch",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: form.major,
              onChange: (e) => setForm((f) => ({ ...f, major: e.target.value })),
              className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary",
              placeholder: "e.g. Computer Science & Engineering"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs font-semibold text-muted-foreground", children: [
          "Bio",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: form.bio,
              onChange: (e) => setForm((f) => ({ ...f, bio: e.target.value })),
              rows: 3,
              className: "w-full resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary",
              placeholder: "Tell others about yourself..."
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            className: "rounded-full",
            onClick: () => setEditOpen(false),
            disabled: saving,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "rounded-full bg-brand-gradient text-primary-foreground shadow-soft hover:opacity-90",
            onClick: handleSave,
            disabled: saving,
            children: saving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1.5 h-4 w-4 animate-spin" }),
              " Saving…"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "mr-1.5 h-4 w-4" }),
              " Save Changes"
            ] })
          }
        )
      ] })
    ] }) })
  ] });
}
function DashboardPage() {
  const navigate = useNavigate();
  const {
    user,
    loading: authLoading,
    signOut
  } = useAuth();
  const profileQuery = useCurrentUserProfile();
  const {
    products
  } = useCatalog();
  const {
    campus
  } = useCampus();
  const wishlist = useWishlist();
  const [myListings, setMyListings] = reactExports.useState([]);
  const [listingOpen, setListingOpen] = reactExports.useState(false);
  const [listingSubmitting, setListingSubmitting] = reactExports.useState(false);
  const [listingForm, setListingForm] = reactExports.useState({
    title: "",
    price: "",
    category: "Books",
    condition: "Good",
    image: "",
    description: "",
    forRent: false,
    rentPerDay: ""
  });
  const rentals = reactExports.useMemo(() => products.filter((p) => p.forRent).slice(0, 4), [products]);
  const [returnOpen, setReturnOpen] = reactExports.useState(false);
  const [selectedRentalId, setSelectedRentalId] = reactExports.useState(null);
  const [returnDate, setReturnDate] = reactExports.useState(() => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().slice(0, 10);
  });
  const [returnNote, setReturnNote] = reactExports.useState("");
  const [rentalStatus, setRentalStatus] = reactExports.useState(() => {
    const init = {};
    rentals.forEach((r, idx) => {
      init[r.id] = idx === 0 ? "Active Rental" : idx === 1 ? "Return Requested" : "Active Rental";
    });
    return init;
  });
  const profile = profileQuery.data ?? (user ? buildFallbackUserProfile(user) : null);
  reactExports.useEffect(() => {
    if (!user?.uid) {
      setMyListings([]);
      return;
    }
    void fetchListingsBySeller(user.uid).then(setMyListings);
  }, [user?.uid]);
  reactExports.useEffect(() => {
    if (!authLoading && !user) {
      navigate({
        to: "/login",
        replace: true
      });
    }
  }, [authLoading, navigate, user]);
  const handleSignOut = async () => {
    await signOut();
    navigate({
      to: "/"
    });
  };
  const displayName = profile?.displayName ?? user?.displayName ?? "Student";
  const email = profile?.email ?? user?.email ?? "No email on file";
  const avatarLabel = displayName.split(" ").slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  const selectedRental = selectedRentalId ? products.find((p) => p.id === selectedRentalId) : null;
  const peerConversations = reactExports.useMemo(() => conversations.filter((c) => !c.isBot), []);
  const submitNewListing = async () => {
    if (!user?.uid) return;
    const price = Number(listingForm.price);
    if (!listingForm.title.trim() || !Number.isFinite(price) || price <= 0 || !listingForm.image.trim()) {
      toast.error("Missing listing details", {
        description: "Add a title, positive price, and cover image URL."
      });
      return;
    }
    setListingSubmitting(true);
    try {
      await createListing({
        title: listingForm.title.trim(),
        price,
        category: listingForm.category,
        condition: listingForm.condition,
        image: listingForm.image.trim(),
        description: listingForm.description.trim() || listingForm.title.trim(),
        shortDescription: listingForm.description.trim().slice(0, 140) || void 0,
        sellerId: user.uid,
        sellerName: profile?.displayName ?? user.displayName ?? "Student",
        sellerCollege: campus || "Campus",
        sellerVerified: Boolean(profile?.emailVerified ?? user.emailVerified),
        sellerRating: 5,
        sellerAvatar: profile?.photoUrl ?? user.photoURL ?? void 0,
        forRent: listingForm.forRent,
        rentPerDay: listingForm.forRent ? Math.max(1, Number(listingForm.rentPerDay) || 1) : void 0
      });
      void fetchListingsBySeller(user.uid).then(setMyListings);
      setListingForm({
        title: "",
        price: "",
        category: "Books",
        condition: "Good",
        image: "",
        description: "",
        forRent: false,
        rentPerDay: ""
      });
      setListingOpen(false);
      toast.success("Listing published", {
        description: "Your item is live for everyone browsing the catalog."
      });
    } catch (e) {
      console.error(e);
      toast.error("Could not publish listing", {
        description: e instanceof Error ? e.message : "Check Firestore rules and network, then try again."
      });
    } finally {
      setListingSubmitting(false);
    }
  };
  if (authLoading && !user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-7xl items-center justify-center px-4 py-24 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card px-6 py-10 text-center shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Loading your dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: "Fetching your account and profile details." })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-lg font-semibold text-primary-foreground shadow-elegant", children: profile?.photoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profile.photoUrl, alt: "", className: "h-full w-full rounded-2xl object-cover" }) : avatarLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "Welcome back, ",
              displayName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-3xl font-semibold italic tracking-tight sm:text-4xl", children: "Your dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
              "Signed in as ",
              email
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-full", children: "Browse marketplace" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full bg-brand-gradient text-primary-foreground shadow-elegant hover:opacity-90", onClick: () => setListingOpen(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " New listing"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", className: "rounded-full", onClick: handleSignOut, children: "Sign out" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [{
        i: Package,
        label: "Your listings",
        v: String(myListings.length),
        t: "Firestore"
      }, {
        i: Heart,
        label: "Wishlist",
        v: String(wishlist.count),
        t: "This device"
      }, {
        i: MessageCircle,
        label: "Messages",
        v: "Open",
        t: "Peer chat"
      }, {
        i: TrendingUp,
        label: "Catalog size",
        v: String(products.length),
        t: "Merged feed"
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.05
      }, className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-xl bg-secondary text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.i, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold text-success", children: s.t })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-2xl font-bold tracking-tight", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccountOverview, { profile }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Quick actions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Shortcuts tied to your account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "w-full justify-start rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }),
              " Browse marketplace"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/chat", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "w-full justify-start rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
              " Open messages"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full justify-start rounded-xl bg-brand-gradient text-primary-foreground shadow-soft hover:opacity-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }),
              " Verify profile status"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-6 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Activity overview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
              "Fine-grained analytics are not wired yet. Use",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Your listings" }),
              " below along with Messages to coordinate deals in real time."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-xl border border-dashed border-border bg-secondary/20 px-4 py-8 text-center text-sm text-muted-foreground", children: "Charts activate automatically once view counts are stored alongside listings." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Recent activity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-4", children: [{
            i: Package,
            t: "Publish inventory with New listing — it syncs to Firestore instantly.",
            time: "Tip"
          }, {
            i: MessageCircle,
            t: "Use Messages for meet-up coordination with Socket.IO chat.",
            time: "Tip"
          }, {
            i: ShoppingBag,
            t: "Browse /marketplace for campus-wide inventory merged with live uploads.",
            time: "Tip"
          }].map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(a.i, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: a.t }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: a.time })
            ] })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "My listings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", className: "text-sm text-primary hover:underline", children: "View all →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/60 text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-left font-medium", children: "Item" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-left font-medium", children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-left font-medium", children: "Views" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-left font-medium", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: myListings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: 4, className: "px-5 py-10 text-center text-sm text-muted-foreground", children: [
            "No listings yet. Use",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "New listing" }),
            " to add your first item."
          ] }) }) : myListings.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, className: "h-10 w-10 rounded-lg object-cover", alt: "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 font-medium", children: p.title })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-3 font-semibold", children: [
              "₹",
              p.price.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-muted-foreground", children: "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-success/15 px-2 py-0.5 text-[11px] font-semibold text-success", children: p.availability ?? "Available" }) })
          ] }, p.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 grid gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Wishlist" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: wishlist.count === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-sm text-muted-foreground", children: "Save items from the marketplace with the heart icon." }) : wishlist.items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, className: "h-12 w-12 rounded-lg object-cover", alt: "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-1 text-sm font-medium", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                "₹",
                p.price.toLocaleString("en-IN"),
                " · ",
                p.seller.college
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 shrink-0 fill-destructive text-destructive" })
          ] }, p.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Recent chats" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: peerConversations.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.avatar, alt: "", className: "h-10 w-10 rounded-full" }),
              c.online && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-success ring-2 ring-card" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: c.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: c.time })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-1 text-xs text-muted-foreground", children: c.lastMsg })
            ] }),
            c.unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-5 min-w-[20px] place-items-center rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground", children: c.unread })
          ] }, c.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold italic", children: "Rental history" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Manage returns and track status" })
        ] }),
        rentals.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid place-items-center rounded-2xl border border-dashed border-border bg-card py-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm font-semibold", children: "No rentals yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: "Rent items from the marketplace to see them here." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: rentals.map((p, i) => {
          const status = rentalStatus[p.id] ?? "Active Rental";
          const chip = status === "Returned Successfully" ? "bg-success/15 text-success" : status === "Return Requested" ? "bg-warning/15 text-warning" : "bg-primary/10 text-primary";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            y: 12
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: i * 0.05
          }, className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: "", className: "h-16 w-16 rounded-xl object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-1 text-sm font-semibold", children: p.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
                    "₹",
                    p.rentPerDay,
                    "/day · ",
                    p.pickupLocation ?? p.seller.college
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${chip}`, children: status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1 text-[11px] text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5 text-foreground" }),
                  "Return by ",
                  returnDate
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: {
                  id: p.id
                }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "rounded-full", children: "View listing" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "rounded-full bg-brand-gradient text-primary-foreground shadow-soft hover:opacity-90", disabled: status !== "Active Rental", onClick: () => {
                  setSelectedRentalId(p.id);
                  setReturnOpen(true);
                }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
                  "Return item"
                ] })
              ] })
            ] })
          ] }) }, p.id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: returnOpen, onOpenChange: setReturnOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Return item" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Request a return pickup or hand-off for your rental. We'll notify the owner and track status here." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            selectedRental ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedRental.image, alt: "", className: "h-12 w-12 rounded-xl object-cover" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-1 text-sm font-semibold", children: selectedRental.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
                  "Pickup: ",
                  selectedRental.pickupLocation ?? selectedRental.seller.college
                ] })
              ] })
            ] }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", children: "Preferred return date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: returnDate, onChange: (e) => setReturnDate(e.target.value), className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/40 p-3 text-xs text-muted-foreground", children: [
                "Status becomes",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Return Requested" }),
                " after confirmation."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", children: "Note (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: returnNote, onChange: (e) => setReturnNote(e.target.value), placeholder: "e.g. Available after 6 PM, meet near Hostel Block B", className: "min-h-24 w-full resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-full", onClick: () => setReturnOpen(false), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full bg-brand-gradient text-primary-foreground shadow-soft hover:opacity-90", onClick: () => {
              if (selectedRentalId) {
                setRentalStatus((s) => ({
                  ...s,
                  [selectedRentalId]: "Return Requested"
                }));
              }
              setReturnNote("");
              setReturnOpen(false);
            }, children: "Confirm return request" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: listingOpen, onOpenChange: setListingOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[90vh] overflow-y-auto sm:max-w-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New listing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Listings are stored in Firebase Firestore and merged with the curated demo catalog everywhere shoppers browse." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs font-semibold text-muted-foreground", children: [
              "Title",
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: listingForm.title, onChange: (e) => setListingForm((f) => ({
                ...f,
                title: e.target.value
              })), className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs font-semibold text-muted-foreground", children: [
                "Price (₹)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: 1, value: listingForm.price, onChange: (e) => setListingForm((f) => ({
                  ...f,
                  price: e.target.value
                })), className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs font-semibold text-muted-foreground", children: [
                "Category",
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: listingForm.category, onChange: (e) => setListingForm((f) => ({
                  ...f,
                  category: e.target.value
                })), className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary", children: PRODUCT_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs font-semibold text-muted-foreground", children: [
              "Condition",
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: listingForm.condition, onChange: (e) => setListingForm((f) => ({
                ...f,
                condition: e.target.value
              })), className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary", children: ["New", "Like New", "Good", "Fair"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs font-semibold text-muted-foreground", children: [
              "Cover image URL",
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: listingForm.image, onChange: (e) => setListingForm((f) => ({
                ...f,
                image: e.target.value
              })), placeholder: "https://…", className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs font-semibold text-muted-foreground", children: [
              "Description",
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: listingForm.description, onChange: (e) => setListingForm((f) => ({
                ...f,
                description: e.target.value
              })), rows: 3, className: "w-full resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: listingForm.forRent, onChange: (e) => setListingForm((f) => ({
                ...f,
                forRent: e.target.checked
              })), className: "rounded border-input" }),
              "Offer for rent (per day)"
            ] }),
            listingForm.forRent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs font-semibold text-muted-foreground", children: [
              "Rent per day (₹)",
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: 1, value: listingForm.rentPerDay, onChange: (e) => setListingForm((f) => ({
                ...f,
                rentPerDay: e.target.value
              })), className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
            ] }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-full", onClick: () => setListingOpen(false), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full bg-brand-gradient text-primary-foreground shadow-soft hover:opacity-90", disabled: listingSubmitting, onClick: () => void submitNewListing(), children: listingSubmitting ? "Publishing…" : "Publish listing" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  DashboardPage as component
};
