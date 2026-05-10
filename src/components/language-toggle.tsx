import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("hi") ? "en" : "hi";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="hidden h-9 rounded-full px-4 font-semibold shadow-sm sm:inline-flex"
    >
      {i18n.language.startsWith("hi") ? "HI" : "EN"}
    </Button>
  );
}
