"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactContent } from "@/content/site";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const f = contactContent.form;

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedAt, setSubmittedAt] = useState(() => Date.now().toString());

  return (
    <section
      id="contact"
      className="scroll-mt-24 w-full bg-primary/10 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center lg:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            {contactContent.subheading}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            {contactContent.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {contactContent.body}
          </p>
        </header>

        <form
          className="mx-auto max-w-xl rounded-2xl border border-border bg-background/80 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          onSubmit={async (e) => {
            e.preventDefault();

            setStatus("loading");
            setErrorMessage("");

            const form = e.currentTarget;
            const formData = new FormData(form);

            const data = {
              name: formData.get("name"),
              email: formData.get("email"),
              company: formData.get("company"),
              message: formData.get("message"),
              website: formData.get("website"),
              submittedAt: formData.get("submittedAt"),
            };

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });

              const result = await res.json();

              if (!res.ok) {
                setStatus("error");
                setErrorMessage(result.error || "Something went wrong.");
                return;
              }

              setStatus("success");
              form.reset();
              setSubmittedAt(Date.now().toString());
            } catch {
              setStatus("error");
              setErrorMessage("Something went wrong. Please try again.");
            }
          }}
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <input
            type="hidden"
            name="submittedAt"
            value={submittedAt}
            readOnly
          />

          <div className="space-y-6">
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">{f.nameLabel}</Label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder={f.namePlaceholder}
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">{f.emailLabel}</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder={f.emailPlaceholder}
                  required
                  disabled={status === "loading"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-company">{f.companyLabel}</Label>
              <Input
                id="contact-company"
                name="company"
                type="text"
                placeholder={f.companyPlaceholder}
                disabled={status === "loading"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">{f.messageLabel}</Label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder={f.messagePlaceholder}
                rows={5}
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-fit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : f.submitLabel}
              </Button>

              <div className="min-h-[24px] text-sm">
                {status === "success" && (
                  <p className="text-green-600">
                    Your message was sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-600">{errorMessage}</p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
