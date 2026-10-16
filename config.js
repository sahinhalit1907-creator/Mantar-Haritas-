/* Mantar Haritası – topluluk (Supabase) ayarları
   Supabase panelinde: Project Settings → API
     SUPABASE_URL      → "Project URL"           (örn. https://abcdxyz.supabase.co)
     SUPABASE_ANON_KEY → "anon" / "publishable" anahtarı (herkese açık anahtar; sorun değil)
   ASLA "service_role" / "secret" anahtarını buraya yazma.
   Boş bırakırsan uygulama yalnızca cihazda çalışır (topluluk özellikleri kapalı kalır). */
window.MANTAR_CONFIG = {
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: ""
};
