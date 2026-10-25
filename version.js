
/* =====================================
   SANDBOXHUB - PENGATUR DOWNLOAD
   ===================================== */

// Ubah versi game di sini
const GAME_VERSION = "1.5.9";

// Ubah nama file installer di sini
const INSTALLER_NAME = "SandboxHUB-Setup-1.5.9.exe";

// Nama repositori GitHub
const GITHUB_REPO = "rashiddd122/Game-Platformer-Sederhana";

const INSTALLER_URL =
  `https://github.com/${GITHUB_REPO}/releases/download/${GAME_VERSION}/${INSTALLER_NAME}`;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-version").forEach((element) => {
    element.textContent = GAME_VERSION;
  });

  document.querySelectorAll(".js-download-link").forEach((element) => {
    element.href = INSTALLER_URL;
  });
});
