import { useTranslation } from "react-i18next";

const SafetyTips = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-16 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-2">{t("safety.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("safety.description")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Traffic noise */}
          <div className="glass rounded-2xl border border-border/50 p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-base">{t("safety.categories.traffic.title")}</h3>
              <span className="text-xs font-medium text-foreground/70">
                {t("safety.categories.traffic.level")}
              </span>
            </div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t("safety.categories.traffic.tips.t1")}</li>
              <li>{t("safety.categories.traffic.tips.t2")}</li>
              <li>{t("safety.categories.traffic.tips.t3")}</li>
              <li>{t("safety.categories.traffic.tips.t4")}</li>
              <li>{t("safety.categories.traffic.tips.t5")}</li>
            </ul>
            <p className="mt-2 text-xs text-amber-600">
              {t("safety.categories.traffic.warning")}
            </p>
          </div>

          {/* Construction noise */}
          <div className="glass rounded-2xl border border-border/50 p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-base">{t("safety.categories.construction.title")}</h3>
              <span className="text-xs font-medium text-foreground/70">
                {t("safety.categories.construction.level")}
              </span>
            </div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t("safety.categories.construction.tips.t1")}</li>
              <li>{t("safety.categories.construction.tips.t2")}</li>
              <li>{t("safety.categories.construction.tips.t3")}</li>
              <li>{t("safety.categories.construction.tips.t4")}</li>
              <li>{t("safety.categories.construction.tips.t5")}</li>
            </ul>
            <p className="mt-2 text-xs text-amber-600">
              {t("safety.categories.construction.warning")}
            </p>
          </div>

          {/* Loud music / events */}
          <div className="glass rounded-2xl border border-border/50 p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-base">{t("safety.categories.music.title")}</h3>
              <span className="text-xs font-medium text-foreground/70">
                {t("safety.categories.music.level")}
              </span>
            </div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t("safety.categories.music.tips.t1")}</li>
              <li>{t("safety.categories.music.tips.t2")}</li>
              <li>{t("safety.categories.music.tips.t3")}</li>
              <li>{t("safety.categories.music.tips.t4")}</li>
              <li>{t("safety.categories.music.tips.t5")}</li>
            </ul>
            <p className="mt-2 text-xs text-amber-600">
              {t("safety.categories.music.warning")}
            </p>
          </div>

          {/* Crowd / public gatherings */}
          <div className="glass rounded-2xl border border-border/50 p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-base">{t("safety.categories.crowd.title")}</h3>
              <span className="text-xs font-medium text-foreground/70">
                {t("safety.categories.crowd.level")}
              </span>
            </div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t("safety.categories.crowd.tips.t1")}</li>
              <li>{t("safety.categories.crowd.tips.t2")}</li>
              <li>{t("safety.categories.crowd.tips.t3")}</li>
              <li>{t("safety.categories.crowd.tips.t4")}</li>
              <li>{t("safety.categories.crowd.tips.t5")}</li>
            </ul>
          </div>

          {/* Honking / sirens */}
          <div className="glass rounded-2xl border border-border/50 p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-base">{t("safety.categories.sirens.title")}</h3>
              <span className="text-xs font-medium text-foreground/70">
                {t("safety.categories.sirens.level")}
              </span>
            </div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t("safety.categories.sirens.tips.t1")}</li>
              <li>{t("safety.categories.sirens.tips.t2")}</li>
              <li>{t("safety.categories.sirens.tips.t3")}</li>
              <li>{t("safety.categories.sirens.tips.t4")}</li>
              <li>{t("safety.categories.sirens.tips.t5")}</li>
            </ul>
          </div>

          {/* Household / neighborhood noise */}
          <div className="glass rounded-2xl border border-border/50 p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-base">{t("safety.categories.household.title")}</h3>
              <span className="text-xs font-medium text-foreground/70">
                {t("safety.categories.household.level")}
              </span>
            </div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t("safety.categories.household.tips.t1")}</li>
              <li>{t("safety.categories.household.tips.t2")}</li>
              <li>{t("safety.categories.household.tips.t3")}</li>
              <li>{t("safety.categories.household.tips.t4")}</li>
              <li>{t("safety.categories.household.tips.t5")}</li>
            </ul>
          </div>
        </div>

        {/* Emergency & Support */}
        <div className="mt-12 max-w-xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-3">{t("safety.emergency.title")}</h3>
          <ul className="list-none space-y-1 text-sm text-muted-foreground">
            <li>● {t("safety.emergency.items.e1")}</li>
            <li>● {t("safety.emergency.items.e2")}</li>
            <li>● {t("safety.emergency.items.e3")}</li>
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            {t("safety.emergency.emailLabel")}:{" "}
            <a href="mailto:yashbavkar26@gmail.com" className="underline underline-offset-2">
              {t("safety.emergency.emailValue")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;

