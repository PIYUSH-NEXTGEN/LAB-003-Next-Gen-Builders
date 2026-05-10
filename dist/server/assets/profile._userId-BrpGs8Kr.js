import { r as reactExports, V as jsxRuntimeExports } from "./server-InY6yCPf.js";
import { J as Route, u as useAuth, l as isFirebaseConfigured, K as fetchPublicProfile, L as Link, B as Button, t as toast } from "./router-B763mWGC.js";
import { N as Navbar, M as MapPin } from "./navbar-D1XcfPQY.js";
import { F as Footer } from "./footer-Dmm9X49a.js";
import { A as ArrowLeft } from "./arrow-left-z1cYGNxi.js";
import { S as ShieldCheck } from "./shield-check-DrQdNd2J.js";
import { M as MessageCircle } from "./message-circle-C-RWDSEg.js";
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
function PublicProfilePage() {
  const {
    userId
  } = Route.useParams();
  const {
    user
  } = useAuth();
  const [profile, setProfile] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let cancelled = false;
    if (!isFirebaseConfigured) {
      setProfile(null);
      setLoading(false);
      return void 0;
    }
    void fetchPublicProfile(userId).then((p) => {
      if (!cancelled) {
        setProfile(p);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);
  const chatDisabledReason = !user ? "sign-in" : user.uid === userId ? "self" : !isFirebaseConfigured ? "firebase" : null;
  const chatSearch = profile && user && chatDisabledReason === null ? {
    peerUid: profile.firebaseUid,
    peerName: profile.displayName,
    peerAvatar: profile.photoUrl ?? ""
  } : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/people", className: "mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to people"
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-10 text-center text-sm text-muted-foreground", children: "Loading profile…" }) : !profile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "Profile not found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This student hasn’t published a directory profile yet, or Firebase isn’t wired up locally." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/people", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-6 rounded-full", children: "Browse people" }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl border border-border bg-card shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 bg-brand-gradient opacity-90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 pb-8 pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-mt-14 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profile.photoUrl ?? `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(profile.firebaseUid)}`, alt: "", className: "h-28 w-28 rounded-3xl border-4 border-card object-cover shadow-soft" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 flex items-center gap-2 text-2xl font-semibold", children: [
            profile.displayName,
            profile.emailVerified ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6 text-primary", "aria-label": "Verified email" }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground", children: profile.campusKey ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-secondary-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
            profile.campusKey
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Campus not shared yet — encourage them to pick one from the navbar." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex w-full max-w-sm flex-col gap-2", children: [
            chatSearch ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/chat", search: chatSearch, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full rounded-full bg-brand-gradient text-primary-foreground shadow-soft hover:opacity-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-2 h-4 w-4" }),
              "Chat on campus"
            ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full rounded-full", variant: "secondary", disabled: chatDisabledReason === "self", onClick: () => {
              if (chatDisabledReason === "sign-in") {
                toast.message("Sign in to chat", {
                  description: "Create an account so messaging stays accountable."
                });
              } else if (chatDisabledReason === "firebase") {
                toast.message("Firebase required", {
                  description: "Add env vars from .env.example so profiles & chat work."
                });
              }
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-2 h-4 w-4" }),
              chatDisabledReason === "self" ? "This is you" : chatDisabledReason === "sign-in" ? "Sign in to chat" : "Configure Firebase to chat"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full rounded-full", children: "Browse listings" }) })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  PublicProfilePage as component
};
