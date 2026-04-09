# 6.1 Inledning

De föregående avsnitten har etablerat två centrala utgångspunkter:

för det första att email i serviceorganisationer utgör en hög-risk-yta för ogenomtänkt automation, och för det andra att *human-in-the-loop* bör betraktas som en designprincip snarare än en teknisk kompromiss.

I detta avsnitt konkretiseras dessa insikter i form av en **mailbot-arkitektur**. Fokus ligger inte på implementation i snäv mening, utan på hur arkitektoniska val kan realisera human-in-the-loop i praktiken och samtidigt utnyttja moderna språkmodellers styrkor utan att exponera deras svagheter.

Utgångspunkten är att arkitekturen ska:

- vara begriplig för tekniskt kunniga beslutsfattare

- vara möjlig att revidera och styra över tid

- göra ansvarsfördelning och begränsningar explicita
