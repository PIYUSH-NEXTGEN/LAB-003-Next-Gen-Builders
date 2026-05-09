import { createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { CategoryIcon } from "@/components/category-icon";
import { Button } from "@/components/ui/button";
import { products, categories, type Category } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type SearchParams = { category?: string };

export const Route = createFileRoute("/marketplace")({
  component: MarketplacePage,
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    category: typeof s.category === "string" ? s.category : undefined,
  }),
});

function MarketplacePage() {
  const search = Route.useSearch();
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<Category | null>((search.category as Category) ?? null);
  const [conditions, setConditions] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(60000);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sort, setSort] = useState<"new" | "low" | "high">("new");

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (activeCat && p.category !== activeCat) return false;
      if (conditions.length && !conditions.includes(p.condition)) return false;
      if (p.price > maxPrice) return false;
      if (verifiedOnly && !p.seller.verified) return false;
      if (query && !p.title.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCat, conditions, maxPrice, verifiedOnly, query, sort]);

  const toggleCondition = (c: string) =>
    setConditions((cs) => (cs.includes(c) ? cs.filter((x) => x !== c) : [...cs, c]));

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border bg-hero-gradient">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-semibold italic tracking-tight sm:text-5xl">Marketplace</h1>
            <p className="mt-2 text-muted-foreground">Discover what your campus is buying, selling and renting today.</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-soft">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search listings…"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="rounded-full border border-border bg-card px-4 py-3 text-sm shadow-soft outline-none"
              >
                <option value="new">Newest</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6 rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </div>

              <FilterBlock title="Category">
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveCat(null)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition",
                      !activeCat ? "bg-secondary font-medium" : "hover:bg-secondary/60",
                    )}
                  >
                    <span>All</span><span className="text-xs text-muted-foreground">{products.length}</span>
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setActiveCat(c.name)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition",
                        activeCat === c.name ? "bg-secondary font-medium" : "hover:bg-secondary/60",
                      )}
                    >
                        <span className="flex items-center gap-2">
                          <span className="grid h-7 w-7 place-items-center rounded-lg bg-secondary text-foreground transition group-hover:text-primary">
                          <CategoryIcon category={c.name} size={16} animated={false} />
                        </span>
                        {c.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{c.count}</span>
                    </button>
                  ))}
                </div>
              </FilterBlock>

              <FilterBlock title="Condition">
                <div className="flex flex-wrap gap-2">
                  {["New", "Like New", "Good", "Fair"].map((c) => (
                    <button
                      key={c}
                      onClick={() => toggleCondition(c)}
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs transition",
                        conditions.includes(c)
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/40",
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </FilterBlock>

              <FilterBlock title={`Max price · ₹${maxPrice.toLocaleString("en-IN")}`}>
                <input
                  type="range" min={100} max={60000} step={100}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[var(--primary)]"
                />
              </FilterBlock>

              <FilterBlock title="Trust">
                <label className="flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="h-4 w-4 rounded accent-[var(--primary)]"
                  />
                  Verified sellers only
                </label>
              </FilterBlock>
            </div>
          </aside>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filtered.length}</span> listings
                {activeCat && <> in <span className="font-semibold text-foreground">{activeCat}</span></>}
              </p>
              {(activeCat || conditions.length || verifiedOnly || query) && (
                <Button
                  variant="ghost" size="sm"
                  onClick={() => { setActiveCat(null); setConditions([]); setVerifiedOnly(false); setQuery(""); }}
                >
                  <X className="h-4 w-4" /> Clear
                </Button>
              )}
            </div>

            {filtered.length === 0 ? (
              <EmptyState />
            ) : (
              <motion.div
                layout
                className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
              >
                {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </motion.div>
            )}

            <Pagination />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
      {children}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="grid place-items-center rounded-2xl border border-dashed border-border bg-card py-20 text-center">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-foreground shadow-soft">
        <Search className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">No listings found</h3>
      <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters or search terms.</p>
    </div>
  );
}

function Pagination() {
  return (
    <div className="mt-10 flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          className={cn(
            "h-9 w-9 rounded-full text-sm font-medium transition",
            n === 1 ? "bg-foreground text-background" : "hover:bg-secondary",
          )}
        >
          {n}
        </button>
      ))}
      <span className="px-2 text-muted-foreground">…</span>
      <button className="h-9 w-9 rounded-full text-sm font-medium hover:bg-secondary">12</button>
    </div>
  );
}
