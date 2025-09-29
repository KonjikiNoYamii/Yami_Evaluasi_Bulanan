export function printQuotes() {
  const haditsList = [
    'Rasulullah ﷺ bersabda: "Sesungguhnya amal itu tergantung pada niat." (HR. Bukhari & Muslim)',
    'Rasulullah ﷺ bersabda: "Barangsiapa beriman kepada Allah dan hari akhir, hendaklah berkata baik atau diam." (HR. Bukhari & Muslim)',
    'Rasulullah ﷺ bersabda: "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain." (HR. Ahmad)',
    'Rasulullah ﷺ bersabda: "Orang kuat bukanlah yang pandai bergulat, melainkan yang mampu mengendalikan dirinya ketika marah." (HR. Bukhari & Muslim)',
    'Rasulullah ﷺ bersabda: "Sesungguhnya Allah tidak melihat rupa dan harta kalian, tetapi Allah melihat hati dan amal kalian." (HR. Muslim)',
  ];

      quotes.style.opacity = 0;
      setTimeout(() => {
        const acak = Math.floor(Math.random() * haditsList.length);
        quotes.textContent = haditsList[acak];
        quotes.style.opacity = 1; 
      }, 1000);
    }
