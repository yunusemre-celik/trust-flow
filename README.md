# Boomerang Landing Page

Conversational AI platform landing page built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide React**.

## 🚀 Live Demo & GitHub Pages Deployment (Yayınlama Rehberi)

Bu proje GitHub Pages üzerinde sorunsuz çalışacak şekilde (`base: './'` ve otomatik GitHub Actions CI/CD) yapılandırılmıştır.

### 1. GitHub'a Gönderme (Push to GitHub)

Projeyi GitHub reponuza yükleyin:

```bash
git init
git add .
git commit -m "feat: Boomerang landing page with boomerang video playback"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADINIZ.git
git push -u origin main
```

### 2. GitHub Pages'i Aktif Etme

1. GitHub deponuza gidin: `Settings` > `Pages`.
2. **Build and deployment** > **Source** kısmından **GitHub Actions** seçeneğini seçin.
3. Projeniz otomatik olarak `.github/workflows/deploy.yml` dosyasını çalıştıracak ve birkaç saniye içinde siteniz `https://<kullanici-adiniz>.github.io/<repo-adiniz>/` adresinde yayında olacaktır!

---

## 🛠️ Yerel Geliştirme (Local Development)

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Üretim sürümünü derleyin
npm run build

# Üretim sürümünü yerel olarak önizleyin
npm run preview
```

---

## 🎨 Tasarım ve Özellikler

- **Boomerang Video Oynatma**: CloudFront üzerinden yüklenen video, offscreen canvas üzerinde kare kare yakalanır ve 30 FPS hızında ileri-geri (ping-pong / boomerang) şeklinde kesintisiz döngüde oynatılır.
- **Tipografi**: Serif başlıklar için `P22 Mackinac W01 Book`, arayüz için `Inter` (300, 400, 500, 600).
- **Renk Paleti**: Saf beyaz `#FFFFFF`, koyu metin `#191919`, kart arka planı `#F4F3F3`.
- **Responsive Tasarım**: Mobil, tablet ve masaüstü ekranlar için optimize edilmiştir.
