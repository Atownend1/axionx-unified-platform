import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                toast({ title: "Welcome back!" });
                navigate("/dashboard");
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        emailRedirectTo: `${window.location.origin}/dashboard`,
                    },
                });
                if (error) throw error;
                toast({ title: "Account created! Redirecting..." });
                navigate("/dashboard");
            }
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-md space-y-8 p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                    <div className="text-center">
                        {/* Logo Placeholder */}
                        <h1 className="text-2xl font-bold mb-6 gradient-text">AxionX Platform</h1>

                        <h2 className="text-3xl font-montserrat font-bold text-white">
                            {isLogin ? "Welcome Back" : "Create Account"}
                        </h2>
                        <p className="mt-2 text-white/70 font-opensans">
                            {isLogin
                                ? "Sign in to continue your conversations"
                                : "Sign up to start chatting with our AI assistant"}
                        </p>
                    </div>

                    <form onSubmit={handleAuth} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="email" className="text-white">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <Label htmlFor="password" className="text-white">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                                    placeholder="••••••••"
                                    minLength={6}
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : isLogin ? (
                                "Sign In"
                            ) : (
                                "Sign Up"
                            )}
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/20" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="px-2 text-white/50 bg-transparent">Or</span>
                            </div>
                        </div>

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full border-white/30 text-white hover:bg-white/10"
                            onClick={() => navigate("/dashboard")}
                        >
                            Try Demo
                        </Button>

                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-sm text-primary hover:underline"
                            >
                                {isLogin
                                    ? "Don't have an account? Sign up"
                                    : "Already have an account? Sign in"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
