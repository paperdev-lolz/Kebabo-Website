/**
 * KEBABO marinade — Menyu (Restoran Milliy Taomlar Portali)
 * Pure Vanilla JavaScript + Three.js 3D Food Models
 * Features:
 * - 30 Authentic 3D Food Models (26 Shashlik & Kabobs, 2 Tandir Non, 2 Choy)
 * - Interactive 360° 3D Spotlight Modal with OrbitControls, Auto-rotate, and 3D Steam
 * - 3D Card Parallax Tilt on Hover & Sizzle Ember Spark FX
 * - Live Instant Search by Dish Name & Number (№)
 * - Category Filter Tabs (All, Shashlik, Non, Choy)
 */

// =============================================================================
// 1. Menu Data (Exact specifications preserved)
// =============================================================================
const MENU_DATA = [
  // --- SHASHLIK & KABOB (Main Menu) ---
  {
    id: "sh-11",
    number: "№ 11",
    name: "Dubayski qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 18000,
    desc: "Maxsus marinadlangan sershira qiyma kabob"
  },
  {
    id: "sh-12",
    number: "№ 12",
    name: "Obichniy qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 15000,
    desc: "Klassik an'anaviy mayin qiyma shashlik"
  },
  {
    id: "sh-14",
    number: "№ 14",
    name: "G`ijdivon",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 18000,
    desc: "Buxoroning mashhur G`ijdivon uslubidagi shirali qiyma"
  },
  {
    id: "sh-15",
    number: "№ 15",
    name: "Qiyma Mozrarella",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 22000,
    desc: "Issiq ko'mirda erib turuvchi nozik Mozzarella pishloqli qiyma"
  },
  {
    id: "sh-22",
    number: "№ 22",
    name: "Avashnoy qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 18000,
    desc: "Xushbo'y yangi sabzavotlar va ziravorlar uyg'unligi"
  },
  {
    id: "sh-23",
    number: "№ 23",
    name: "Achchiq qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 18000,
    desc: "O'tkir qizil qalampir va sharq ziravorlari bilan olovli kabob"
  },
  {
    id: "sh-25",
    number: "№ 25",
    name: "Zakaz qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 20000,
    desc: "Usta oshpazning maxsus retsepti asosidagi saralangan go'sht"
  },
  {
    id: "sh-16",
    number: "№ 16",
    name: "Tabaki qanot / Tabaki son qismi",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 16000,
    desc: "Qarsildoq qovurilgan tovuq go'shti (qanot yoki son qismi)"
  },
  {
    id: "sh-17",
    number: "№ 17",
    name: "To`rg`amchi yog`siz",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 24000,
    desc: "Saralangan, toza yog'siz lahm go'sht bo'laklari"
  },
  {
    id: "sh-19",
    number: "№ 19",
    name: "To'rg'amchi yo`g'li",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 22000,
    desc: "Mayin lahm go'sht va xushbo'y dumba yog'ining shirali kombinatsiyasi"
  },
  {
    id: "sh-18",
    number: "№ 18",
    name: "Kavkaz (mol go'shti)",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 30000,
    desc: "Kavkazcha usulda marinadlangan yirik mol go'shti lahm bo'laklari"
  },
  {
    id: "sh-36",
    number: "№ 36",
    name: "Kavkaz (qo'y go'shti)",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 33000,
    desc: "Hosilador qo'zichoq go'shti va an'anaviy xushbo'y tog' giyohlari"
  },
  {
    id: "sh-21",
    number: "№ 21",
    name: "Kavkaz tabaki",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 24000,
    desc: "Press ostida qarsildoq qilib qovurilgan sarxil jo'ja tabaka"
  },
  {
    id: "sh-20",
    number: "№ 20",
    name: "Marvarid",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 22000,
    desc: "Marvariddek tizilgan shirali, qiyma va lahm qismli nozik kabob"
  },
  {
    id: "sh-nap",
    number: "№",
    name: "Napalyon",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 23000,
    desc: "Go'sht va mayin dumba qatlamlarining go'zal qavatli simfoniyasi"
  },
  {
    id: "sh-26",
    number: "№ 26",
    name: "O'rama shashlik",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 22000,
    desc: "Yupqa tilim lahm go'shtning xushbo'y dumba bilan o'ralgan varianti"
  },
  {
    id: "sh-2",
    number: "№ 2",
    name: "Tovuq fille",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 14000,
    desc: "Yengil, parhezbop va sershira tovuq filesi shashligi"
  },
  {
    id: "sh-28",
    number: "№ 28",
    name: "Lavash rulet",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 23000,
    desc: "Yupqa qarsildoq lavashga o'ralgan ko'mirda pishgan mazali kabob"
  },
  {
    id: "sh-29",
    number: "№ 29",
    name: "Dollar",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 35000,
    desc: "Maxsus kesimdagi eng sara go'shtdan tayyorlangan premium shashlik"
  },
  {
    id: "sh-30",
    number: "№ 30",
    name: "Jigar",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 18000,
    desc: "Tandirda mayin dumba pardasiga o'ralib pishirilgan jigar shashlik"
  },
  {
    id: "sh-31",
    number: "№ 31",
    name: "Non kabob qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 12000,
    desc: "Yangi tandir nonining issiq bag'rida tortiladigan sershira qiyma"
  },
  {
    id: "sh-32",
    number: "№ 32",
    name: "Biqin qo`y (kachalka)",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 28000,
    desc: "Qo'y go'shtining eng shirin biqin qismidan tayyorlangan kachalka"
  },
  {
    id: "sh-33",
    number: "№ 33",
    name: "Qovurg'a (qo'y g`o'shti)",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 25000,
    desc: "Qo'y qovurg'asidan tayyorlangan qarsildoq qovurma shashlik"
  },
  {
    id: "sh-34",
    number: "№ 34",
    name: "To'rg'amchi yog`l",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 25000,
    desc: "Xushbo'y dumba bilan boyitilgan mayin to'rg'amchi lahm"
  },
  {
    id: "sh-35",
    number: "№ 35",
    name: "Qo'y go'shti qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 22000,
    desc: "100% sara qo'y go'shti va dumbasidan tayyorlangan asl qiyma"
  },
  {
    id: "sh-1",
    number: "№ 1",
    name: "Dumba",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 16000,
    desc: "Mangalda tillarang tusda pishirilgan qarsildoq dumba kabob"
  },

  // --- NON ---
  {
    id: "non-yarim",
    number: "",
    name: "Non (yarimta)",
    category: "non",
    categoryLabel: "Non",
    price: 3000,
    desc: "Tandirdan uzilgan issiq va mayin patir non (yarim bo'lak)"
  },
  {
    id: "non-butun",
    number: "",
    name: "Non (butun)",
    category: "non",
    categoryLabel: "Non",
    price: 5000,
    desc: "Tandirdan yangi uzilgan barra patir non (butun)"
  },

  // --- CHOY ---
  {
    id: "choy-kok",
    number: "",
    name: "Ko'k choy",
    category: "choy",
    categoryLabel: "Choy",
    price: 3000,
    desc: "Xushbo'y damlangan milliy ko'k choy (chinni choynakda)"
  },
  {
    id: "choy-qora",
    number: "",
    name: "Qora choy",
    category: "choy",
    categoryLabel: "Choy",
    price: 3000,
    desc: "To'yingan quyuq qora choy (chinni choynakda)"
  }
];

// =============================================================================
// 2. Application State
// =============================================================================
const STATE = {
  currentCategory: "all",
  searchQuery: "",
  snapshots: {}
};

// =============================================================================
// 3. Helper Functions
// =============================================================================

/**
 * Format currency strictly as `XX 000 so'm`
 */
function formatCurrency(amount) {
  const numStr = Math.round(amount).toString();
  const formatted = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${formatted} so'm`;
}

/**
 * Normalize Uzbek strings for resilient searching
 */
function normalizeText(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[`'ʻʼ’]/g, "'")
    .replace(/o[']/g, "o'")
    .replace(/g[']/g, "g'")
    .trim();
}

/**
 * Visual sizzle spark bursts on user interaction
 */
function burstPlateSparks(rect) {
  if (typeof document === "undefined") return;
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const sparkCount = 8;
  for (let i = 0; i < sparkCount; i++) {
    const spark = document.createElement("div");
    spark.className = "plate-burst-spark";

    const angle = (i * (Math.PI * 2)) / sparkCount + (Math.random() * 0.4 - 0.2);
    const dist = 35 + Math.random() * 45;
    const bx = Math.cos(angle) * dist;
    const by = Math.sin(angle) * dist - 8;

    spark.style.left = `${centerX}px`;
    spark.style.top = `${centerY}px`;
    spark.style.setProperty("--bx", `${bx}px`);
    spark.style.setProperty("--by", `${by}px`);

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 550);
  }
}

// =============================================================================
// 4. Three.js 3D Card Snapshots Engine
// =============================================================================

/**
 * Generates high-definition 3D rendered thumbnails for each menu item
 * using an offscreen Three.js WebGL renderer
 */
function init3DCardSnapshots() {
  if (typeof window === "undefined" || !window.THREE || !window.Food3D) return;

  try {
    const width = 360;
    const height = 240;
    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = width;
    offscreenCanvas.height = height;

    const renderer = new THREE.WebGLRenderer({
      canvas: offscreenCanvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    camera.position.set(0, 2.3, 3.6);
    camera.lookAt(0, 0.15, 0);

    // Warm Restaurant Lighting
    const ambLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e6, 1.25);
    keyLight.position.set(2.5, 4.5, 3);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const emberLight = new THREE.PointLight(0xff4500, 1.8, 8);
    emberLight.position.set(0, -0.4, 0);
    scene.add(emberLight);

    const rimLight = new THREE.DirectionalLight(0x80d8ff, 0.65);
    rimLight.position.set(-3, 2, -2);
    scene.add(rimLight);

    // Render snapshot for each menu item
    MENU_DATA.forEach(item => {
      const model = Food3D.createDish3DModel(item);
      scene.add(model);

      renderer.render(scene, camera);
      const dataUrl = offscreenCanvas.toDataURL("image/png");
      STATE.snapshots[item.id] = dataUrl;

      scene.remove(model);
    });

    // Clean up offscreen renderer
    renderer.dispose();

    // Update rendered card images if grid already in DOM
    document.querySelectorAll(".dish-3d-thumb").forEach(img => {
      const card = img.closest(".menu-card");
      if (card) {
        const id = card.getAttribute("data-id");
        if (id && STATE.snapshots[id]) {
          img.src = STATE.snapshots[id];
        }
      }
    });
  } catch (err) {
    console.warn("Could not generate offscreen 3D snapshots:", err);
  }
}

// =============================================================================
// 5. Interactive Three.js 3D Spotlight Modal Viewer
// =============================================================================

let modal3DScene = null;
let modal3DCamera = null;
let modal3DRenderer = null;
let modal3DControls = null;
let currentModalModel = null;
let modalSteamParticles = null;
let modalAnimFrameId = null;
let isModalAutoRotating = true;

function init3DModalViewer() {
  if (typeof window === "undefined" || !window.THREE) return;

  const canvas = document.getElementById("dishModal3DCanvas");
  const stage = document.getElementById("dishModalStageWrap");
  if (!canvas || !stage) return;

  modal3DScene = new THREE.Scene();

  const width = stage.clientWidth || 400;
  const height = stage.clientHeight || 300;

  modal3DCamera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  modal3DCamera.position.set(0, 2.3, 3.8);
  modal3DCamera.lookAt(0, 0.15, 0);

  modal3DRenderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  modal3DRenderer.setSize(width, height, false);
  modal3DRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  modal3DRenderer.shadowMap.enabled = true;

  // OrbitControls
  if (THREE.OrbitControls) {
    modal3DControls = new THREE.OrbitControls(modal3DCamera, canvas);
    modal3DControls.enableDamping = true;
    modal3DControls.dampingFactor = 0.06;
    modal3DControls.minDistance = 2.0;
    modal3DControls.maxDistance = 6.0;
    modal3DControls.maxPolarAngle = Math.PI / 2 + 0.12; // Prevent going underneath platter
    modal3DControls.autoRotate = isModalAutoRotating;
    modal3DControls.autoRotateSpeed = 2.0;
    modal3DControls.target.set(0, 0.15, 0);
  }

  // Lighting
  const ambLight = new THREE.AmbientLight(0xffffff, 0.8);
  modal3DScene.add(ambLight);

  const keyLight = new THREE.DirectionalLight(0xffecd2, 1.3);
  keyLight.position.set(2.5, 4.5, 3);
  keyLight.castShadow = true;
  modal3DScene.add(keyLight);

  const emberLight = new THREE.PointLight(0xff4500, 2.0, 8);
  emberLight.position.set(0, -0.4, 0);
  modal3DScene.add(emberLight);

  const rimLight = new THREE.DirectionalLight(0x80d8ff, 0.7);
  rimLight.position.set(-3, 2, -2);
  modal3DScene.add(rimLight);

  // 3D Rising Steam Particles
  const steamCount = 35;
  const steamGeo = new THREE.BufferGeometry();
  const steamPositions = new Float32Array(steamCount * 3);
  const steamSpeeds = new Float32Array(steamCount);

  for (let i = 0; i < steamCount; i++) {
    steamPositions[i * 3] = (Math.random() - 0.5) * 1.4;
    steamPositions[i * 3 + 1] = 0.2 + Math.random() * 1.5;
    steamPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.9;
    steamSpeeds[i] = 0.008 + Math.random() * 0.012;
  }

  steamGeo.setAttribute("position", new THREE.BufferAttribute(steamPositions, 3));
  const steamMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.12,
    transparent: true,
    opacity: 0.35
  });

  modalSteamParticles = new THREE.Points(steamGeo, steamMat);
  modalSteamParticles.userData = { speeds: steamSpeeds };
  modal3DScene.add(modalSteamParticles);

  // Auto-Rotate Button toggle
  const toggleBtn = document.getElementById("toggle3DRotateBtn");
  const rotateLabel = document.getElementById("rotateBtnLabel");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isModalAutoRotating = !isModalAutoRotating;
      if (modal3DControls) {
        modal3DControls.autoRotate = isModalAutoRotating;
      }
      toggleBtn.classList.toggle("active", isModalAutoRotating);
      if (rotateLabel) {
        rotateLabel.textContent = isModalAutoRotating ? "Aylanish" : "To'xtatilgan";
      }
    });
  }

  // Camera Reset Button
  const resetBtn = document.getElementById("reset3DCameraBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (modal3DCamera && modal3DControls) {
        modal3DCamera.position.set(0, 2.3, 3.8);
        modal3DControls.target.set(0, 0.15, 0);
        modal3DControls.update();
      }
    });
  }

  // Resize listener
  window.addEventListener("resize", onModal3DResize);
}

function onModal3DResize() {
  const stage = document.getElementById("dishModalStageWrap");
  if (!stage || !modal3DRenderer || !modal3DCamera) return;

  const width = stage.clientWidth;
  const height = stage.clientHeight;
  if (width === 0 || height === 0) return;

  modal3DCamera.aspect = width / height;
  modal3DCamera.updateProjectionMatrix();
  modal3DRenderer.setSize(width, height, false);
}

function loadDishInto3DModal(item) {
  if (!modal3DScene || !window.Food3D) return;

  if (currentModalModel) {
    modal3DScene.remove(currentModalModel);
    currentModalModel = null;
  }

  currentModalModel = Food3D.createDish3DModel(item);
  modal3DScene.add(currentModalModel);

  // Reset controls to optimal camera angle
  if (modal3DCamera && modal3DControls) {
    modal3DCamera.position.set(0, 2.3, 3.8);
    modal3DControls.target.set(0, 0.15, 0);
    modal3DControls.update();
  }
}

function startModal3DAnimation() {
  if (modalAnimFrameId) cancelAnimationFrame(modalAnimFrameId);

  function animate() {
    modalAnimFrameId = requestAnimationFrame(animate);

    if (modal3DControls) {
      modal3DControls.update();
    }

    // Animate 3D rising steam particles
    if (modalSteamParticles) {
      const positions = modalSteamParticles.geometry.attributes.position.array;
      const speeds = modalSteamParticles.userData.speeds;
      const count = positions.length / 3;

      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += speeds[i];
        // Swirl horizontally
        positions[i * 3] += Math.sin(positions[i * 3 + 1] * 3.5) * 0.003;

        if (positions[i * 3 + 1] > 2.0) {
          positions[i * 3 + 1] = 0.2;
          positions[i * 3] = (Math.random() - 0.5) * 1.4;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 0.9;
        }
      }
      modalSteamParticles.geometry.attributes.position.needsUpdate = true;
    }

    if (modal3DRenderer && modal3DScene && modal3DCamera) {
      modal3DRenderer.render(modal3DScene, modal3DCamera);
    }
  }

  animate();
}

function pauseModal3DAnimation() {
  if (modalAnimFrameId) {
    cancelAnimationFrame(modalAnimFrameId);
    modalAnimFrameId = null;
  }
}

// =============================================================================
// 6. Modal Open & Close Logic
// =============================================================================

function openDishModal(itemId, event = null) {
  if (typeof document === "undefined") return;
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  // Sizzle burst sparks from clicked location
  if (event) {
    const target = event.currentTarget || event.target;
    if (target && target.getBoundingClientRect) {
      burstPlateSparks(target.getBoundingClientRect());
    }
  }

  const modal = document.getElementById("dishModal");
  const backdrop = document.getElementById("dishModalBackdrop");
  const title = document.getElementById("dishModalTitle");
  const number = document.getElementById("dishModalNumber");
  const cat = document.getElementById("dishModalCategory");
  const price = document.getElementById("dishModalPrice");
  const desc = document.getElementById("dishModalDesc");

  if (title) title.textContent = item.name;
  if (number) {
    if (item.number) {
      number.textContent = item.number;
      number.style.display = "inline-flex";
    } else {
      number.style.display = "none";
    }
  }
  if (cat) cat.textContent = item.categoryLabel;
  if (price) price.textContent = formatCurrency(item.price);
  if (desc) desc.textContent = item.desc;

  // Load matching 3D Model into the Three.js viewport
  loadDishInto3DModal(item);

  if (modal && backdrop) {
    backdrop.style.display = "block";
    modal.style.display = "flex";
    void modal.offsetWidth;
    backdrop.classList.add("show");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";

    // Adjust 3D canvas dimensions once visible
    setTimeout(() => {
      onModal3DResize();
      startModal3DAnimation();
    }, 50);
  }
}

function closeDishModal() {
  const modal = document.getElementById("dishModal");
  const backdrop = document.getElementById("dishModalBackdrop");

  pauseModal3DAnimation();

  if (modal && backdrop) {
    backdrop.classList.remove("show");
    modal.classList.remove("show");
    setTimeout(() => {
      backdrop.style.display = "none";
      modal.style.display = "none";
      document.body.style.overflow = "";
    }, 280);
  }
}

// Make functions globally accessible
if (typeof window !== "undefined") {
  window.openDishModal = openDishModal;
  window.closeDishModal = closeDishModal;
}

// =============================================================================
// 7. Menu Filter & Render Logic
// =============================================================================

function getFilteredMenu() {
  const normalizedQuery = normalizeText(STATE.searchQuery);

  return MENU_DATA.filter(item => {
    const categoryMatches = (STATE.currentCategory === "all") || (item.category === STATE.currentCategory);
    if (!categoryMatches) return false;

    if (!normalizedQuery) return true;

    const normalizedName = normalizeText(item.name);
    const normalizedDesc = normalizeText(item.desc);
    const rawNumberDigits = item.number ? item.number.replace(/\D/g, "") : "";

    return (
      normalizedName.includes(normalizedQuery) ||
      normalizedDesc.includes(normalizedQuery) ||
      (item.number && item.number.toLowerCase().includes(normalizedQuery)) ||
      (rawNumberDigits && rawNumberDigits.includes(normalizedQuery))
    );
  });
}

function renderMenuGrid() {
  if (typeof document === "undefined") return;

  const grid = document.getElementById("menuGrid");
  const emptyState = document.getElementById("noResultsState");
  const resultsCount = document.getElementById("resultsCount");
  const sectionTitle = document.getElementById("sectionTitle");

  if (!grid || !emptyState || !resultsCount || !sectionTitle) return;

  const filteredItems = getFilteredMenu();

  // Update headers
  if (STATE.searchQuery.trim()) {
    sectionTitle.textContent = `Qidiruv natijalari: "${STATE.searchQuery.trim()}"`;
  } else {
    switch (STATE.currentCategory) {
      case "shashlik":
        sectionTitle.textContent = "Shashlik & Kabob (№ 1–36)";
        break;
      case "non":
        sectionTitle.textContent = "Non mahsulotlari";
        break;
      case "choy":
        sectionTitle.textContent = "Choy & Ichimliklar";
        break;
      default:
        sectionTitle.textContent = "Barcha taomlar";
    }
  }

  resultsCount.textContent = `${filteredItems.length} ta taom`;

  if (filteredItems.length === 0) {
    grid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  grid.innerHTML = filteredItems.map(item => {
    const badgeHtml = item.number
      ? `<span class="item-num-badge">${item.number}</span>`
      : `<span class="category-pill">${item.categoryLabel}</span>`;

    const snapshotSrc = STATE.snapshots[item.id] || "";

    return `
      <article class="menu-card" data-id="${item.id}" onclick="openDishModal('${item.id}', event)">
        <!-- 3D Interactive Food Dish Showcase -->
        <div class="card-dish-showcase" title="3D ko'rish uchun bosing">
          <div class="dish-glow-aura"></div>
          <div class="dish-stage-3d">
            <div class="dish-plate-container">
              <img class="dish-3d-thumb" src="${snapshotSrc}" alt="${item.name}" loading="lazy">
              <div class="dish-steam-fx">
                <span class="steam-curl"></span>
                <span class="steam-curl"></span>
                <span class="steam-curl"></span>
              </div>
            </div>
            <div class="dish-ambient-shadow"></div>
          </div>
        </div>

        <div class="card-info-content">
          <div class="card-top">
            <div class="item-badge-wrap">
              ${badgeHtml}
              <span class="category-pill">${item.categoryLabel}</span>
            </div>
            <div class="item-price">${formatCurrency(item.price)}</div>
          </div>
          <div class="card-body">
            <h3 class="item-name">${item.name}</h3>
            <p class="item-desc">${item.desc}</p>
          </div>
        </div>
        <div class="card-action-bar">
          <button class="btn-view-dish" type="button" onclick="openDishModal('${item.id}', event)" aria-label="${item.name} 3D ko'rish">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
            </svg>
            <span>3D Ko'rish</span>
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function updateCategoryCounts() {
  if (typeof document === "undefined") return;

  const countAll = MENU_DATA.length;
  const countShashlik = MENU_DATA.filter(i => i.category === "shashlik").length;
  const countNon = MENU_DATA.filter(i => i.category === "non").length;
  const countChoy = MENU_DATA.filter(i => i.category === "choy").length;

  const elAll = document.getElementById("countAll");
  const elShashlik = document.getElementById("countShashlik");
  const elNon = document.getElementById("countNon");
  const elChoy = document.getElementById("countChoy");

  if (elAll) elAll.textContent = countAll;
  if (elShashlik) elShashlik.textContent = countShashlik;
  if (elNon) elNon.textContent = countNon;
  if (elChoy) elChoy.textContent = countChoy;
}

/**
 * Interactive 3D Card Parallax on Mouse Move
 */
function initCardParallax() {
  const menuGrid = document.getElementById("menuGrid");
  if (!menuGrid) return;

  menuGrid.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".menu-card");
    if (!card) return;
    const stage = card.querySelector(".dish-stage-3d");
    const shadow = card.querySelector(".dish-ambient-shadow");
    const glow = card.querySelector(".dish-glow-aura");
    if (!stage) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 14;

    stage.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(12px)`;

    if (shadow) {
      const shadowX = ((x - centerX) / centerX) * -12;
      const shadowY = ((y - centerY) / centerY) * -6 + 3;
      shadow.style.transform = `translateX(calc(-50% + ${shadowX.toFixed(1)}px)) translateY(${shadowY.toFixed(1)}px) scale(0.96)`;
    }

    if (glow) {
      const glowX = ((x - centerX) / centerX) * 16;
      const glowY = ((y - centerY) / centerY) * 12;
      glow.style.transform = `translate(${glowX.toFixed(1)}px, ${glowY.toFixed(1)}px)`;
    }
  });

  menuGrid.addEventListener("mouseleave", (e) => {
    const card = e.target.closest(".menu-card");
    if (!card) return;
    const stage = card.querySelector(".dish-stage-3d");
    const shadow = card.querySelector(".dish-ambient-shadow");
    const glow = card.querySelector(".dish-glow-aura");
    if (stage) stage.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    if (shadow) shadow.style.transform = "translateX(-50%) translateY(0px) scale(1)";
    if (glow) glow.style.transform = "translate(0px, 0px)";
  }, true);
}

// =============================================================================
// 8. Application Initialization
// =============================================================================

function initApp() {
  updateCategoryCounts();
  renderMenuGrid();
  initCardParallax();

  // Initialize Three.js 3D System
  if (typeof window !== "undefined" && window.THREE) {
    init3DCardSnapshots();
    init3DModalViewer();
  }

  // Search input with debounce
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      STATE.searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = STATE.searchQuery ? "flex" : "none";
      }
      renderMenuGrid();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      STATE.searchQuery = "";
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      clearSearchBtn.style.display = "none";
      renderMenuGrid();
    });
  }

  // Category filter tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.currentCategory = btn.getAttribute("data-category");
      renderMenuGrid();
    });
  });

  // Reset filter button in empty state
  const resetFilterBtn = document.getElementById("resetFilterBtn");
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", () => {
      STATE.searchQuery = "";
      STATE.currentCategory = "all";

      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";

      tabButtons.forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-category") === "all");
      });

      renderMenuGrid();
    });
  }

  // Modal Close Triggers
  const closeDishModalBtn = document.getElementById("closeDishModalBtn");
  const dishModalBackdrop = document.getElementById("dishModalBackdrop");
  if (closeDishModalBtn) closeDishModalBtn.addEventListener("click", closeDishModal);
  if (dishModalBackdrop) dishModalBackdrop.addEventListener("click", closeDishModal);

  // Keyboard accessibility
  document.addEventListener("keydown", (e) => {
    // Esc closes 3D modal
    if (e.key === "Escape") {
      closeDishModal();
    }
    // '/' key focuses search bar (if not typing in input)
    if (e.key === "/" && document.activeElement !== searchInput && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        window.scrollTo({ top: searchInput.offsetTop - 80, behavior: "smooth" });
      }
    }
  });
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
}

// Export for module/Node testing if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = { MENU_DATA, formatCurrency, normalizeText };
}
