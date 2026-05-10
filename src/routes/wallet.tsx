import { createFileRoute } from "@tanstack/react-router";
import { useWalletBalance, useTransactionHistory } from "@/lib/economy";
import { Wallet, ArrowUpRight, ArrowDownLeft, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/wallet")({
  component: WalletPage,
});

function WalletPage() {
  const { user } = useAuth();
  const { data: balance = 0, isLoading: loadingBalance } = useWalletBalance();
  const { data: transactions = [], isLoading: loadingTx } = useTransactionHistory();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground">My Wallet</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-1 border-none bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-amber-100 flex items-center gap-2">
              <Wallet className="h-5 w-5" /> Wallet Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-black tracking-tighter">
              {loadingBalance ? "..." : `₹${balance?.toLocaleString("en-IN")}`}
            </div>
            <p className="mt-2 text-sm text-amber-100/80">
              Use your wallet to buy and rent items on the marketplace.
            </p>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>Your recent marketplace activity</CardDescription>
          </CardHeader>
          <CardContent>
            {loadingTx ? (
              <div className="flex h-32 items-center justify-center text-muted-foreground">
                Loading history...
              </div>
            ) : transactions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                <Clock className="mb-3 h-8 w-8 opacity-20" />
                <p>No transactions yet</p>
                <p className="text-sm">Start buying or selling to see activity here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {transactions.map((tx) => {
                  const isSender = tx.senderId === user?.uid;
                  const Icon = isSender ? ArrowUpRight : ArrowDownLeft;
                  return (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between rounded-xl border border-border/50 bg-secondary/20 p-4 transition-colors hover:bg-secondary/40"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`grid h-10 w-10 place-items-center rounded-full ${
                            isSender
                              ? "bg-red-500/10 text-red-500"
                              : "bg-emerald-500/10 text-emerald-500"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold">{tx.description}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(tx.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`font-bold ${
                          isSender ? "text-red-500" : "text-emerald-500"
                        }`}
                      >
                        {isSender ? "-" : "+"}₹{tx.amount.toLocaleString("en-IN")}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
