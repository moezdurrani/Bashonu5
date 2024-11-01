/**
* Template Name: Squadfree
* Template URL: https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

// Songs added here
import allMusic from './music-list.js';

document.addEventListener("DOMContentLoaded", function () {
  const songListContainer = document.getElementById('songList');
  const khowarLyricsContainer = document.getElementById('khowarText');
  const urduLyricsContainer = document.getElementById('urduText');
  const khowarSection = document.getElementById('khowarLyrics');
  const urduSection = document.getElementById('urduLyrics');
  const toggleKhowar = document.getElementById('toggleKhowar');
  const toggleUrdu = document.getElementById('toggleUrdu');
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progressContainer = document.getElementById('progressContainer');
  const progressBar = document.getElementById('progressBar');
  const progressIndicator = document.getElementById('progressIndicator');
  const currentSongIcon = document.getElementById("currentSongIcon");

  let currentSongSrc = null; // Track the current song source

  // Toggle play/pause button
  playPauseBtn.addEventListener('click', togglePlayPause);

  // Display songs on page load
function displaySongs() {
  songListContainer.innerHTML = ''; 

  // Sort songs alphabetically by song name
  allMusic.sort((a, b) => a.name.localeCompare(b.name));

  allMusic.forEach((song) => {
    const songItem = document.createElement('div');
    songItem.classList.add('song-item');

    const songName = document.createElement('h3');
    songName.textContent = song.name;
    songItem.appendChild(songName);

    const songDetails = document.createElement('p');
    songDetails.textContent = `Writer: ${song.writer} | Singer: ${song.singer}`;
    songItem.appendChild(songDetails);

    songItem.addEventListener('click', () => {
      if (currentSongSrc === song.src) {
        // Scroll to lyrics if the same song is already playing
        toggleSection("urdu"); 
        document.getElementById("services").scrollIntoView({ behavior: "smooth" });
        return; 
      }

      // Load and play a new song if a different one is clicked
      fetchAndDisplayLyrics(song.lyricsFile, song.src);
      toggleSection("urdu"); 
      document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    });

    songListContainer.appendChild(songItem);
  });
}

  

  // Fetch and display lyrics, start playing the song
  function fetchAndDisplayLyrics(lyricsFile, audioSrc) {
    const lyricsPath = `assets/lyrics/${lyricsFile}`;
    fetch(lyricsPath)
      .then(response => {
        if (!response.ok) throw new Error("Lyrics not found");
        return response.text();
      })
      .then(data => {
        const lyricsLines = data.split('\n').slice(3).join('\n');
        const [englishLyrics, khowarLyrics] = lyricsLines.split("URDUONWARDS").map(text => text.trim());

        urduLyricsContainer.innerHTML = englishLyrics ? englishLyrics.replace(/\n/g, "<br>") : "Urdu lyrics not found.";
        khowarLyricsContainer.innerHTML = khowarLyrics ? khowarLyrics.replace(/\n/g, "<br>") : "Khowar lyrics not found.";

        currentSongSrc = audioSrc; // Update the current song source
        audioPlayer.src = audioSrc;
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; 
        currentSongIcon.src = "assets/img/playingMusic.gif";
      })
      .catch(error => {
        console.error("Error fetching lyrics:", error);
        urduLyricsContainer.innerHTML = "Urdu lyrics not found.";
        khowarLyricsContainer.innerHTML = "Khowar lyrics not found.";
      });
  }

  // Scroll to lyrics section if the icon is clicked and a song is playing
  currentSongIcon.addEventListener("click", function () {
    if (currentSongSrc) {
      document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    } else {
      alert("No song is currently playing!");
    }
  });

  // Toggle section display between Khowar and Urdu
  function toggleSection(language) {
    if (language === "khowar") {
      khowarSection.classList.add('active');
      urduSection.classList.remove('active');
      toggleKhowar.classList.add('active');
      toggleUrdu.classList.remove('active');
    } else {
      urduSection.classList.add('active');
      khowarSection.classList.remove('active');
      toggleUrdu.classList.add('active');
      toggleKhowar.classList.remove('active');
    }
  }

  // Add event listener for the scroll-to-lyrics icon
const scrollToLyricsIcon = document.getElementById("scroll-to-lyrics");
const lyricsIcon = document.getElementById("lyricsIcon");

scrollToLyricsIcon.addEventListener("click", function () {
  if (currentSongSrc) {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  } else {
    alert("No song is currently playing!");
  }
});

// Update the lyrics icon depending on play state
function updateLyricsIcon(isPlaying) {
  lyricsIcon.src = isPlaying ? "assets/img/playingMusic.gif" : "assets/img/notPlayingMusic.png";
}

// Update the icon when play/pause state changes
audioPlayer.addEventListener('play', () => updateLyricsIcon(true));
audioPlayer.addEventListener('pause', () => updateLyricsIcon(false));
audioPlayer.addEventListener('ended', () => updateLyricsIcon(false));


  // Toggle buttons for Khowar and Urdu
  toggleKhowar.addEventListener('click', () => toggleSection("khowar"));
  toggleUrdu.addEventListener('click', () => toggleSection("urdu"));

  // Toggle play/pause functionality
  function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      currentSongIcon.src = "assets/img/playingMusic.gif";
    } else {
      audioPlayer.pause();
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      currentSongIcon.src = "assets/img/notPlayingMusic.png";
    }
  }

  // Update icon when the audio ends
  audioPlayer.addEventListener('ended', () => {
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    currentSongIcon.src = "assets/img/notPlayingMusic.png";
  });

  // Update progress bar and indicator
  audioPlayer.addEventListener('timeupdate', () => {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Adjust the indicator position
    const playPauseButtonWidth = playPauseBtn.offsetWidth; 
    const progressContainerWidth = progressContainer.offsetWidth;
    const indicatorPosition = ((progressPercent / 100) * progressContainerWidth) + playPauseButtonWidth + 5;
    progressIndicator.style.left = `${indicatorPosition}px`;
  });

  // Seek function for progress bar
  progressContainer.addEventListener('click', (e) => {
    const clickX = e.offsetX;
    const width = progressContainer.clientWidth;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
  });

  displaySongs();
});


