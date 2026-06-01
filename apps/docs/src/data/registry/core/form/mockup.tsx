import React, { useState } from "react";
import { Mail, Lock, User, Check, Star, Settings, Fingerprint, Eye, EyeOff, MessageSquare, AlertCircle } from "lucide-react";

type FormTab = "login" | "signup" | "feedback" | "settings";

export default function InteractiveFormMockup() {
  const [activeTab, setActiveTab] = useState<FormTab>("login");
  const [toast, setToast] = useState<{ show: boolean; title: string; desc: string; type: "success" | "error" }>({
    show: false,
    title: "",
    desc: "",
    type: "success"
  });

  const triggerToast = (title: string, desc: string, type: "success" | "error" = "success") => {
    setToast({ show: true, title, desc, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      backgroundColor: "#09090b",
      color: "#fafafa",
      fontFamily: "Inter, system-ui, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Toast Notification Banner */}
      <div style={{
        position: "absolute",
        top: toast.show ? "12px" : "-80px",
        left: "12px",
        right: "12px",
        background: "rgba(15, 15, 20, 0.9)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${toast.type === "success" ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"}`,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
        borderRadius: "12px",
        padding: "12px 16px",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: toast.show ? "auto" : "none"
      }}>
        <div style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: toast.type === "success" ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)",
          color: toast.type === "success" ? "#22c55e" : "#ef4444",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          {toast.type === "success" ? <Check size={14} /> : <AlertCircle size={14} />}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "12px", fontWeight: "600", color: "#ffffff" }}>{toast.title}</div>
          <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "2px" }}>{toast.desc}</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{
        display: "flex",
        padding: "8px 12px",
        gap: "4px",
        background: "rgba(255, 255, 255, 0.02)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      }}>
        {(["login", "signup", "feedback", "settings"] as FormTab[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              background: activeTab === tab ? "rgba(168, 85, 247, 0.15)" : "transparent",
              color: activeTab === tab ? "#c084fc" : "#94a3b8",
              border: `1px solid ${activeTab === tab ? "rgba(168, 85, 247, 0.25)" : "transparent"}`,
              padding: "6px 0",
              borderRadius: "8px",
              fontSize: "11px",
              fontWeight: "600",
              textTransform: "capitalize",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div style={{
        flex: 1,
        padding: "20px 16px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column"
      }}>
        {activeTab === "login" && <LoginForm onToast={triggerToast} />}
        {activeTab === "signup" && <SignupForm onToast={triggerToast} />}
        {activeTab === "feedback" && <FeedbackForm onToast={triggerToast} />}
        {activeTab === "settings" && <SettingsForm onToast={triggerToast} />}
      </div>
    </div>
  );
}

/* ==========================================================================
   1. LOGIN FORM COMPONENT
   ========================================================================== */
function LoginForm({ onToast }: { onToast: (t: string, d: string, type?: "success" | "error") => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bioActive, setBioActive] = useState(false);
  const [bioState, setBioState] = useState<"idle" | "scanning" | "success" | "error">("idle");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      onToast("Authentication Failed", "Please fill in all fields.", "error");
      return;
    }
    if (!email.includes("@")) {
      onToast("Invalid Email", "Please enter a valid email address.", "error");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onToast("Login Successful", "Welcome back to your vault!");
    }, 1200);
  };

  const simulateBiometrics = () => {
    setBioState("scanning");
    setTimeout(() => {
      setBioState("success");
      setTimeout(() => {
        setBioState("idle");
        onToast("Biometric Authenticated", "Secure access granted via Face ID.");
      }, 800);
    }, 1800);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: 0 }}>Welcome Back</h3>
        <p style={{ fontSize: "12px", color: "#a1a1aa", margin: "4px 0 0 0" }}>Sign in to access your secure vault dashboard</p>
      </div>

      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Email Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Address</label>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <Mail size={15} style={{ position: "absolute", left: "12px", color: "#71717a" }} />
            <input
              type="text"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
                padding: "10px 12px 10px 36px",
                color: "#ffffff",
                fontSize: "13px",
                outline: "none",
                transition: "all 0.2s"
              }}
              onFocus={e => e.target.style.borderColor = "#a855f7"}
              onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.08)"}
            />
          </div>
        </div>

        {/* Password Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em" }}>Password</label>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <Lock size={15} style={{ position: "absolute", left: "12px", color: "#71717a" }} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
                padding: "10px 36px 10px 36px",
                color: "#ffffff",
                fontSize: "13px",
                outline: "none",
                transition: "all 0.2s"
              }}
              onFocus={e => e.target.style.borderColor = "#a855f7"}
              onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.08)"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                background: "none",
                border: "none",
                color: "#71717a",
                cursor: "pointer",
                padding: 0
              }}
            >
              {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        {/* Remember Me Toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "12px", color: "#a1a1aa" }}>Remember this device</span>
          <button
            type="button"
            onClick={() => setRememberMe(!rememberMe)}
            style={{
              width: "36px",
              height: "20px",
              borderRadius: "10px",
              background: rememberMe ? "#a855f7" : "rgba(255, 255, 255, 0.1)",
              border: "none",
              cursor: "pointer",
              position: "relative",
              padding: 0,
              transition: "background 0.2s ease"
            }}
          >
            <div style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "#ffffff",
              position: "absolute",
              top: "2px",
              left: rememberMe ? "18px" : "2px",
              transition: "left 0.2s ease"
            }} />
          </button>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            background: isSubmitting ? "#7e22ce" : "#a855f7",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 0",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "6px",
            transition: "all 0.2s",
            boxShadow: "0 4px 12px rgba(168, 85, 247, 0.25)"
          }}
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* Biometric Scan Section */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        paddingTop: "16px",
        gap: "10px"
      }}>
        <span style={{ fontSize: "11px", color: "#71717a" }}>Or authenticate via biometrics</span>
        <button
          onClick={simulateBiometrics}
          disabled={bioState === "scanning"}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: bioState === "scanning" ? "rgba(168, 85, 247, 0.15)" : "rgba(255, 255, 255, 0.02)",
            border: `1px dashed ${bioState === "scanning" ? "#a855f7" : bioState === "success" ? "#22c55e" : "rgba(255, 255, 255, 0.15)"}`,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: bioState === "scanning" ? "#c084fc" : bioState === "success" ? "#22c55e" : "#a1a1aa",
            transition: "all 0.3s ease",
            animation: bioState === "scanning" ? "spin 2s linear infinite" : "none"
          }}
        >
          <Fingerprint size={28} />
        </button>
        <span style={{ fontSize: "10px", color: bioState === "scanning" ? "#c084fc" : bioState === "success" ? "#22c55e" : "#71717a" }}>
          {bioState === "scanning" ? "Scanning Face ID..." : bioState === "success" ? "Access Granted!" : "Tap to use Face ID"}
        </span>
      </div>

      <style>{`
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/* ==========================================================================
   2. SIGNUP FORM COMPONENT
   ========================================================================== */
function SignupForm({ onToast }: { onToast: (t: string, d: string, type?: "success" | "error") => void }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simple password strength calculation
  const getPasswordStrength = () => {
    if (!password) return { label: "", color: "transparent", score: 0 };
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { label: "Weak Security", color: "#ef4444", score };
    if (score <= 4) return { label: "Medium Security", color: "#eab308", score };
    return { label: "Strong Security", color: "#22c55e", score };
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) {
      onToast("Creation Failed", "Please fill in all details.", "error");
      return;
    }
    if (username.length < 4) {
      onToast("Username Too Short", "Must be at least 4 characters.", "error");
      return;
    }
    if (!agree) {
      onToast("Terms & Conditions", "You must agree to the terms.", "error");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onToast("Account Created", "Your new secure vault is active!");
    }, 1200);
  };

  const strength = getPasswordStrength();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: 0 }}>Create Vault Account</h3>
        <p style={{ fontSize: "12px", color: "#a1a1aa", margin: "4px 0 0 0" }}>Start securing your digital assets today</p>
      </div>

      <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* Username Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em" }}>Username</label>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <User size={15} style={{ position: "absolute", left: "12px", color: "#71717a" }} />
            <input
              type="text"
              placeholder="vault_hunter"
              value={username}
              onChange={e => setUsername(e.target.value.toLowerCase().replace(/\s/g, ""))}
              style={{
                width: "100%",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
                padding: "10px 12px 10px 36px",
                color: "#ffffff",
                fontSize: "13px",
                outline: "none",
                transition: "all 0.2s"
              }}
              onFocus={e => e.target.style.borderColor = "#a855f7"}
              onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.08)"}
            />
          </div>
          {username.length > 0 && (
            <span style={{ fontSize: "10px", color: username.length >= 4 ? "#22c55e" : "#ef4444", display: "flex", alignItems: "center", gap: "4px" }}>
              {username.length >= 4 ? "✓ Username is available" : "⚠ Must be at least 4 characters"}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Address</label>
          <input
            type="text"
            placeholder="hunter@domain.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: "100%",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "10px 12px",
              color: "#ffffff",
              fontSize: "13px",
              outline: "none",
              transition: "all 0.2s"
            }}
            onFocus={e => e.target.style.borderColor = "#a855f7"}
            onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.08)"}
          />
        </div>

        {/* Password Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em" }}>Security Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: "100%",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "10px 12px",
              color: "#ffffff",
              fontSize: "13px",
              outline: "none",
              transition: "all 0.2s"
            }}
            onFocus={e => e.target.style.borderColor = "#a855f7"}
            onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.08)"}
          />
          {password.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "2px" }}>
              <div style={{ display: "flex", gap: "3px", height: "4px" }}>
                {[1, 2, 3, 4, 5].map(step => (
                  <div
                    key={step}
                    style={{
                      flex: 1,
                      background: step <= strength.score ? strength.color : "rgba(255, 255, 255, 0.05)",
                      borderRadius: "2px",
                      transition: "background 0.2s ease"
                    }}
                  />
                ))}
              </div>
              <span style={{ fontSize: "10px", color: strength.color, fontWeight: "600" }}>
                {strength.label}
              </span>
            </div>
          )}
        </div>

        {/* Terms Agreement Checkbox */}
        <button
          type="button"
          onClick={() => setAgree(!agree)}
          style={{
            background: "none",
            border: "none",
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            cursor: "pointer",
            textAlign: "left",
            padding: "4px 0",
            color: "#a1a1aa"
          }}
        >
          <div style={{
            width: "16px",
            height: "16px",
            borderRadius: "4px",
            background: agree ? "#a855f7" : "rgba(255, 255, 255, 0.02)",
            border: `1px solid ${agree ? "#a855f7" : "rgba(255, 255, 255, 0.15)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            flexShrink: 0,
            marginTop: "1px"
          }}>
            {agree && <Check size={12} strokeWidth={3} />}
          </div>
          <span style={{ fontSize: "11px", lineHeight: "1.3" }}>
            I consent to the terms of database encryption and biometrics storage policies.
          </span>
        </button>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            background: isSubmitting ? "#7e22ce" : "#a855f7",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 0",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "8px",
            transition: "all 0.2s"
          }}
        >
          {isSubmitting ? "Creating vault..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}

/* ==========================================================================
   3. FEEDBACK / SUPPORT FORM COMPONENT
   ========================================================================== */
function FeedbackForm({ onToast }: { onToast: (t: string, d: string, type?: "success" | "error") => void }) {
  const [category, setCategory] = useState("bug");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [desc, setDesc] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      onToast("Rating Required", "Please click a star rating.", "error");
      return;
    }
    if (desc.trim().length < 10) {
      onToast("Description Required", "Please explain in at least 10 characters.", "error");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      onToast("Feedback Submitted", "Thank you for making Nativecn better!");
    }, 1200);
  };

  const resetForm = () => {
    setRating(0);
    setDesc("");
    setSuccess(false);
  };

  if (success) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        height: "100%",
        textAlign: "center",
        padding: "20px 0"
      }}>
        <div style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(34, 197, 94, 0.1)",
          color: "#22c55e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 20px rgba(34, 197, 94, 0.15)"
        }}>
          <Check size={24} strokeWidth={2.5} />
        </div>
        <div>
          <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", margin: 0 }}>Review Logged Successfully</h4>
          <p style={{ fontSize: "12px", color: "#a1a1aa", margin: "6px 0 0 0", lineHeight: "1.4" }}>
            Your feedback report has been saved into our decentralised system ledger.
          </p>
        </div>
        <button
          onClick={resetForm}
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            color: "#ffffff",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "8px 16px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "12px"
          }}
        >
          Send Another Report
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: 0 }}>Vault Feedback</h3>
        <p style={{ fontSize: "12px", color: "#a1a1aa", margin: "4px 0 0 0" }}>Report an anomaly or rate your vault safety</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* Category Selection Dropdown */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em" }}>Category</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            style={{
              width: "100%",
              background: "#09090b",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "10px 12px",
              color: "#ffffff",
              fontSize: "13px",
              outline: "none",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            <option value="bug">🐛 Report Anomaly / Bug</option>
            <option value="security">🛡️ Security Incident</option>
            <option value="ui">✨ Theme / UI Enhancements</option>
            <option value="other">💬 General Suggestions</option>
          </select>
        </div>

        {/* Star Rating Selection */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em" }}>Satisfaction Rating</label>
          <div style={{ display: "flex", gap: "6px", padding: "4px 0" }}>
            {[1, 2, 3, 4, 5].map(star => {
              const isActive = (hoverRating || rating) >= star;
              return (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    color: isActive ? "#eab308" : "rgba(255, 255, 255, 0.08)",
                    transition: "all 0.1s"
                  }}
                >
                  <Star size={24} fill={isActive ? "#eab308" : "transparent"} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Textarea Description */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em" }}>anomaly logs / description</label>
          <textarea
            placeholder="Explain the experience or security bug detail in full depth here..."
            value={desc}
            onChange={e => setDesc(e.target.value)}
            rows={4}
            style={{
              width: "100%",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "10px 12px",
              color: "#ffffff",
              fontSize: "13px",
              outline: "none",
              resize: "none",
              transition: "all 0.2s"
            }}
            onFocus={e => e.target.style.borderColor = "#a855f7"}
            onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.08)"}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            background: isSubmitting ? "#7e22ce" : "#a855f7",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 0",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "6px",
            transition: "all 0.2s"
          }}
        >
          {isSubmitting ? "Submitting anomaly report..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
}

/* ==========================================================================
   4. SETTINGS / PREFERENCES FORM COMPONENT
   ========================================================================== */
function SettingsForm({ onToast }: { onToast: (t: string, d: string, type?: "success" | "error") => void }) {
  const [name, setName] = useState("Agent Antigravity");
  const [bio, setBio] = useState("Autonomous AI Developer driving full stack glassmorphic components.");
  const [theme, setTheme] = useState("dark");
  const [notif, setNotif] = useState(true);
  const [haptic, setHaptic] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      onToast("Preferences Updated", "All system configuration parameters updated.");
    }, 1000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #a855f7, #6366f1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "700",
          color: "#ffffff"
        }}>
          AA
        </div>
        <div>
          <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", margin: 0 }}>System Settings</h3>
          <p style={{ fontSize: "11px", color: "#a1a1aa", margin: "2px 0 0 0" }}>Update node details and parameters</p>
        </div>
      </div>

      <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* Name Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label style={{ fontSize: "10px", fontWeight: "600", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em" }}>Profile Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              width: "100%",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "8px 12px",
              color: "#ffffff",
              fontSize: "13px",
              outline: "none",
              transition: "all 0.2s"
            }}
            onFocus={e => e.target.style.borderColor = "#a855f7"}
            onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.08)"}
          />
        </div>

        {/* Bio Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label style={{ fontSize: "10px", fontWeight: "600", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em" }}>Node Description</label>
          <textarea
            value={bio}
            onChange={e => setBio(e.target.value)}
            rows={2}
            style={{
              width: "100%",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "8px 12px",
              color: "#ffffff",
              fontSize: "13px",
              outline: "none",
              resize: "none",
              transition: "all 0.2s"
            }}
            onFocus={e => e.target.style.borderColor = "#a855f7"}
            onBlur={e => e.target.style.borderColor = "rgba(255, 255, 255, 0.08)"}
          />
        </div>

        {/* Separator */}
        <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.05)", margin: "4px 0" }} />

        {/* Toggles Group */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Notification Toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontSize: "12px", display: "block", color: "#ffffff" }}>Push Notifications</span>
              <span style={{ fontSize: "10px", color: "#71717a" }}>Receive instant ledger sync logs</span>
            </div>
            <button
              type="button"
              onClick={() => setNotif(!notif)}
              style={{
                width: "36px",
                height: "20px",
                borderRadius: "10px",
                background: notif ? "#a855f7" : "rgba(255, 255, 255, 0.1)",
                border: "none",
                cursor: "pointer",
                position: "relative",
                padding: 0,
                transition: "background 0.2s ease"
              }}
            >
              <div style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "#ffffff",
                position: "absolute",
                top: "2px",
                left: notif ? "18px" : "2px",
                transition: "left 0.2s ease"
              }} />
            </button>
          </div>

          {/* Haptics Toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontSize: "12px", display: "block", color: "#ffffff" }}>Tactile Feedback</span>
              <span style={{ fontSize: "10px", color: "#71717a" }}>Simulate full haptic node clicks</span>
            </div>
            <button
              type="button"
              onClick={() => setHaptic(!haptic)}
              style={{
                width: "36px",
                height: "20px",
                borderRadius: "10px",
                background: haptic ? "#a855f7" : "rgba(255, 255, 255, 0.1)",
                border: "none",
                cursor: "pointer",
                position: "relative",
                padding: 0,
                transition: "background 0.2s ease"
              }}
            >
              <div style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "#ffffff",
                position: "absolute",
                top: "2px",
                left: haptic ? "18px" : "2px",
                transition: "left 0.2s ease"
              }} />
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSaving}
          style={{
            background: isSaving ? "#7e22ce" : "#a855f7",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "9px 0",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "6px",
            transition: "all 0.2s"
          }}
        >
          {isSaving ? "Saving preferences..." : "Save Preferences"}
        </button>
      </form>
    </div>
  );
}
