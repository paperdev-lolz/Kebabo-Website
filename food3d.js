/**
 * KEBABO marinade - 3D Food Models Engine (Three.js)
 * High-fidelity, authentic 3D models for all 30 menu items:
 * - 26 Shashlik & Kabobs (Qiyma, Chunk Go'sht, Tabaki chicken, Lavash, Mozzarella, etc.)
 * - 2 Tandir Non (Yarimta & Butun with seamless organic LatheGeometry and real crumb textures)
 * - 2 Traditional Uzbek Tea Sets (Ko'k choy & Qora choy with Choynak & Piyola)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['three'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('./three.min.js'));
  } else {
    root.Food3D = factory(root.THREE);
  }
}(typeof self !== 'undefined' ? self : this, function (THREE) {
  'use strict';

  // Texture Cache to avoid regenerating canvas textures
  const textureCache = {};

  /**
   * Helper to create or retrieve procedural canvas textures
   */
  function getProceduralTexture(type, param) {
    const key = `${type}_${param || ''}`;
    if (textureCache[key]) return textureCache[key];

    if (typeof document === 'undefined') return null;

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    if (type === 'meat_char') {
      // Grilled meat texture with char marks, caramelization, and spices
      const isChicken = param === 'chicken';
      const isLiver = param === 'liver';
      const isSpicy = param === 'spicy';

      const baseColor = isLiver ? '#3e1610' : (isChicken ? '#c27938' : '#6b2413');
      const lightColor = isLiver ? '#5a2218' : (isChicken ? '#e6a15c' : '#9c3d20');

      const grad = ctx.createLinearGradient(0, 0, 512, 512);
      grad.addColorStop(0, baseColor);
      grad.addColorStop(0.5, lightColor);
      grad.addColorStop(1, baseColor);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Meat fiber texture noise
      for (let i = 0; i < 4000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const rad = Math.random() * 3.5 + 0.5;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(40,10,5,0.45)' : 'rgba(230,120,60,0.3)';
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
      }

      // Grilled char lines
      ctx.strokeStyle = 'rgba(25, 6, 2, 0.85)';
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';
      for (let y = 60; y < 512; y += 95) {
        ctx.beginPath();
        ctx.moveTo(30, y + (Math.random() * 14 - 7));
        ctx.bezierCurveTo(160, y + 10, 320, y - 8, 480, y + (Math.random() * 14 - 7));
        ctx.stroke();
      }

      // Sumac / paprika / herb specks
      for (let i = 0; i < 350; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const r = Math.random() * 2.2 + 0.6;
        if (isSpicy) {
          ctx.fillStyle = Math.random() > 0.4 ? '#b71c1c' : '#2e7d32';
        } else {
          ctx.fillStyle = Math.random() > 0.6 ? '#7b1113' : (Math.random() > 0.5 ? '#2e7d32' : '#f57f17');
        }
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (type === 'fat_glaze') {
      // Golden glistening lamb tail fat (dumba)
      const grad = ctx.createRadialGradient(256, 256, 30, 256, 256, 250);
      grad.addColorStop(0, '#fff4db');
      grad.addColorStop(0.4, '#f5c66b');
      grad.addColorStop(0.85, '#d48828');
      grad.addColorStop(1, '#8f460a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Glisten highlights
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.beginPath();
        ctx.arc(x, y, Math.random() * 5 + 1, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (type === 'bread_crust') {
      // Uzbek Tandir Non Crust
      const grad = ctx.createRadialGradient(256, 256, 50, 256, 256, 256);
      grad.addColorStop(0, '#f9dfa5');
      grad.addColorStop(0.35, '#e59a42');
      grad.addColorStop(0.75, '#be5e16');
      grad.addColorStop(0.92, '#7e2d04');
      grad.addColorStop(1, '#4e1b00');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Baked bread flour dusting & fine pores
      for (let i = 0; i < 4000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 245, 220, 0.22)' : 'rgba(90, 30, 5, 0.18)';
        ctx.fillRect(x, y, 2, 2);
      }

      // Traditional Chekich floral stamp radial rays
      ctx.strokeStyle = 'rgba(95, 30, 2, 0.65)';
      ctx.lineWidth = 3;
      for (let r = 35; r <= 130; r += 22) {
        ctx.beginPath();
        ctx.arc(256, 256, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Chekich star pattern
      for (let i = 0; i < 16; i++) {
        const angle = (i * Math.PI * 2) / 16;
        ctx.beginPath();
        ctx.moveTo(256 + Math.cos(angle) * 30, 256 + Math.sin(angle) * 30);
        ctx.lineTo(256 + Math.cos(angle) * 135, 256 + Math.sin(angle) * 135);
        ctx.stroke();
      }

      // Black nigella seeds (Sedana) & white sesame seeds
      for (let i = 0; i < 350; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 40 + Math.random() * 195;
        const x = 256 + Math.cos(angle) * dist;
        const y = 256 + Math.sin(angle) * dist;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.random() * Math.PI);
        if (Math.random() > 0.45) {
          // Black nigella seed (sedana)
          ctx.fillStyle = '#181818';
          ctx.beginPath();
          ctx.ellipse(0, 0, 3.2, 1.8, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // White sesame seed
          ctx.fillStyle = '#fff8ee';
          ctx.beginPath();
          ctx.ellipse(0, 0, 3.4, 1.9, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    } else if (type === 'bread_crumb') {
      // Sliced Bread Crumb (interior dough with aerated pores)
      const grad = ctx.createLinearGradient(0, 512, 0, 0);
      grad.addColorStop(0, '#f5e4c3');
      grad.addColorStop(0.3, '#fdf7eb');
      grad.addColorStop(0.85, '#fef9f0');
      grad.addColorStop(1, '#e5a557'); // Toasted top boundary
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Fluffy airy crumb pores (soft bread holes)
      for (let i = 0; i < 600; i++) {
        const x = Math.random() * 512;
        const y = 50 + Math.random() * 440;
        const rx = 1.5 + Math.random() * 4.5;
        const ry = 1.0 + Math.random() * 3.5;
        ctx.fillStyle = Math.random() > 0.4 ? 'rgba(215, 180, 130, 0.35)' : 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }

      // Golden brown crust edge border at top
      ctx.fillStyle = 'rgba(180, 75, 15, 0.4)';
      ctx.fillRect(0, 0, 512, 25);
    } else if (type === 'paxta_ceramic') {
      // Uzbek Paxta (Cotton) Traditional Ceramic Pattern
      ctx.fillStyle = '#0f274a'; // Deep cobalt blue
      ctx.fillRect(0, 0, 512, 512);

      // Gold and white floral arches
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(256, 256, 230, 0, Math.PI * 2);
      ctx.stroke();

      // Stylized cotton flowers
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        const x = 256 + Math.cos(angle) * 150;
        const y = 256 + Math.sin(angle) * 150;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);

        // White cotton petals
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(-14, 0, 16, 0, Math.PI * 2);
        ctx.arc(14, 0, 16, 0, Math.PI * 2);
        ctx.arc(0, -18, 18, 0, Math.PI * 2);
        ctx.fill();

        // Gold center
        ctx.fillStyle = '#d4af37';
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    } else if (type === 'slate_stone') {
      // Dark slate serving platter texture
      ctx.fillStyle = '#1c1c20';
      ctx.fillRect(0, 0, 512, 512);

      for (let i = 0; i < 6000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(70, 70, 80, 0.25)' : 'rgba(10, 10, 12, 0.35)';
        ctx.fillRect(x, y, 2.5, 2.5);
      }

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(256, 256, 238, 0, Math.PI * 2);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    textureCache[key] = texture;
    return texture;
  }

  // Common Materials
  function getMaterials() {
    return {
      skewerMetal: new THREE.MeshStandardMaterial({
        color: 0xeeeeee,
        metalness: 0.96,
        roughness: 0.16,
        envMapIntensity: 1.2
      }),
      plateStone: new THREE.MeshStandardMaterial({
        color: 0x222226,
        roughness: 0.78,
        metalness: 0.12,
        map: getProceduralTexture('slate_stone')
      }),
      meatStandard: new THREE.MeshStandardMaterial({
        color: 0x8a321a,
        roughness: 0.55,
        metalness: 0.08,
        map: getProceduralTexture('meat_char', 'standard')
      }),
      meatSpicy: new THREE.MeshStandardMaterial({
        color: 0x9b2414,
        roughness: 0.52,
        metalness: 0.08,
        map: getProceduralTexture('meat_char', 'spicy')
      }),
      meatChicken: new THREE.MeshStandardMaterial({
        color: 0xd88e44,
        roughness: 0.45,
        metalness: 0.06,
        map: getProceduralTexture('meat_char', 'chicken')
      }),
      meatLiver: new THREE.MeshStandardMaterial({
        color: 0x4e1b12,
        roughness: 0.58,
        metalness: 0.1,
        map: getProceduralTexture('meat_char', 'liver')
      }),
      dumbaFat: new THREE.MeshStandardMaterial({
        color: 0xf8d184,
        roughness: 0.35,
        metalness: 0.05,
        map: getProceduralTexture('fat_glaze')
      }),
      meltedCheese: new THREE.MeshStandardMaterial({
        color: 0xfff9e6,
        roughness: 0.28,
        metalness: 0.04
      }),
      onionRing: new THREE.MeshStandardMaterial({
        color: 0xf5f0eb,
        roughness: 0.4,
        metalness: 0.05,
        transparent: true,
        opacity: 0.92
      }),
      onionPurple: new THREE.MeshStandardMaterial({
        color: 0x8e24aa,
        roughness: 0.45,
        metalness: 0.05,
        transparent: true,
        opacity: 0.88
      }),
      freshHerbs: new THREE.MeshStandardMaterial({
        color: 0x2e7d32,
        roughness: 0.6,
        metalness: 0.02
      }),
      roastedChili: new THREE.MeshStandardMaterial({
        color: 0xb71c1c,
        roughness: 0.25,
        metalness: 0.08
      }),
      breadCrust: new THREE.MeshStandardMaterial({
        color: 0xdd8c35,
        roughness: 0.72,
        metalness: 0.04,
        map: getProceduralTexture('bread_crust')
      }),
      breadCrumb: new THREE.MeshStandardMaterial({
        color: 0xfdf7eb,
        roughness: 0.88,
        metalness: 0.02,
        side: THREE.DoubleSide,
        map: getProceduralTexture('bread_crumb')
      }),
      paxtaCeramic: new THREE.MeshStandardMaterial({
        color: 0x0f274a,
        roughness: 0.18,
        metalness: 0.25,
        map: getProceduralTexture('paxta_ceramic')
      }),
      goldAccent: new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        metalness: 0.9,
        roughness: 0.22
      }),
      greenTeaLiquid: new THREE.MeshStandardMaterial({
        color: 0x7cb342,
        roughness: 0.1,
        metalness: 0.1,
        transparent: true,
        opacity: 0.85
      }),
      blackTeaLiquid: new THREE.MeshStandardMaterial({
        color: 0xa04000,
        roughness: 0.1,
        metalness: 0.1,
        transparent: true,
        opacity: 0.9
      })
    };
  }

  /**
   * Builds the dark ceramic/slate serving platter with beveled rim
   */
  function buildServingPlatter(materials) {
    const platterGroup = new THREE.Group();

    // Oval slate platter
    const platterGeo = new THREE.CylinderGeometry(1.65, 1.5, 0.1, 40);
    const platter = new THREE.Mesh(platterGeo, materials.plateStone);
    platter.scale.set(1.5, 1, 1.05); // Oval shape
    platter.position.y = -0.06;
    platter.castShadow = true;
    platter.receiveShadow = true;
    platterGroup.add(platter);

    // Inner rim depression
    const innerGeo = new THREE.CylinderGeometry(1.48, 1.38, 0.04, 36);
    const innerPlatter = new THREE.Mesh(innerGeo, materials.plateStone);
    innerPlatter.scale.set(1.48, 1, 1.02);
    innerPlatter.position.y = -0.02;
    platterGroup.add(innerPlatter);

    return platterGroup;
  }

  /**
   * Builds marinated sliced onion rings and herbs on the platter
   */
  function buildGarnish(materials, count = 5) {
    const garnish = new THREE.Group();

    // Onion rings
    for (let i = 0; i < count; i++) {
      const radius = 0.16 + Math.random() * 0.08;
      const tube = 0.022;
      const geo = new THREE.TorusGeometry(radius, tube, 8, 20);
      const mat = (i % 2 === 0) ? materials.onionRing : materials.onionPurple;
      const ring = new THREE.Mesh(geo, mat);

      const angle = (i * (Math.PI * 2)) / count + Math.random() * 0.3;
      const dist = 0.75 + Math.random() * 0.45;
      ring.position.set(Math.cos(angle) * dist, 0.04, Math.sin(angle) * (dist * 0.7));
      ring.rotation.x = Math.PI / 2 + (Math.random() * 0.3 - 0.15);
      ring.rotation.y = Math.random() * Math.PI;
      garnish.add(ring);
    }

    // Fresh coriander / parsley leaves
    for (let i = 0; i < 7; i++) {
      const leafGeo = new THREE.DodecahedronGeometry(0.045, 0);
      const leaf = new THREE.Mesh(leafGeo, materials.freshHerbs);
      leaf.scale.set(1.4, 0.3, 1);
      const x = (Math.random() - 0.5) * 1.6;
      const z = (Math.random() - 0.5) * 0.8;
      leaf.position.set(x, 0.06, z);
      leaf.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      garnish.add(leaf);
    }

    return garnish;
  }

  /**
   * Builds realistic stainless steel skewers
   */
  function buildSkewer(materials, length = 3.6, isDouble = false) {
    const skewerGroup = new THREE.Group();

    const makeSingleRod = (offsetZ = 0) => {
      // Main blade (flat steel rectangular skewer)
      const bladeGeo = new THREE.BoxGeometry(0.05, 0.016, length);
      const blade = new THREE.Mesh(bladeGeo, materials.skewerMetal);
      blade.castShadow = true;
      blade.position.z = offsetZ;
      skewerGroup.add(blade);

      // Sharp pointed tip
      const tipGeo = new THREE.ConeGeometry(0.035, 0.25, 4);
      const tip = new THREE.Mesh(tipGeo, materials.skewerMetal);
      tip.rotation.x = Math.PI / 2;
      tip.position.set(0, 0, length / 2 + 0.12);
      skewerGroup.add(tip);

      // Spiral handle loop
      const handleTorus = new THREE.TorusGeometry(0.08, 0.018, 8, 18);
      const handle = new THREE.Mesh(handleTorus, materials.skewerMetal);
      handle.rotation.y = Math.PI / 2;
      handle.position.set(0, 0, -length / 2 - 0.08);
      skewerGroup.add(handle);
    };

    if (isDouble) {
      makeSingleRod(-0.08);
      makeSingleRod(0.08);
    } else {
      makeSingleRod(0);
    }

    return skewerGroup;
  }

  /**
   * Main 3D Model Factory for all 30 menu items
   */
  function createDish3DModel(item) {
    const materials = getMaterials();
    const dishGroup = new THREE.Group();

    const name = (item.name || '').toLowerCase();
    const desc = (item.desc || '').toLowerCase();
    const cat = item.category;

    // -------------------------------------------------------------------------
    // 1. NON (Traditional Uzbek Tandir Bread with Organic Lathe Geometry)
    // -------------------------------------------------------------------------
    if (cat === 'non') {
      const isHalf = name.includes('yarimta');
      dishGroup.add(buildServingPlatter(materials));

      // Authentic cross-sectional profile of an Uzbek Patir Non:
      // Radius profile from center (r = 0) out to the puffy rim (r = 0.94)
      const breadProfile = [
        new THREE.Vector2(0, 0),        // Center flat bottom
        new THREE.Vector2(0.92, 0),     // Outer edge bottom
        new THREE.Vector2(0.96, 0.08),  // Outer rim lower curve
        new THREE.Vector2(0.94, 0.20),  // Outer rim rounded belly
        new THREE.Vector2(0.82, 0.30),  // Outer rim puffy crown
        new THREE.Vector2(0.68, 0.25),  // Inner rim slope down
        new THREE.Vector2(0.52, 0.16),  // Slope into stamped central basin
        new THREE.Vector2(0.30, 0.13),  // Stamped basin floor
        new THREE.Vector2(0, 0.13)      // Center button
      ];

      const breadGroup = new THREE.Group();

      if (isHalf) {
        // --- HALF BREAD (Non yarimta) ---
        // 1. Semicircular crust surface: Lathe swept from -PI/2 to +PI/2
        // Cut diameter lies squarely along the X axis from x = -0.92 to +0.92 at z = 0
        const halfCrustGeo = new THREE.LatheGeometry(breadProfile, 36, -Math.PI / 2, Math.PI);
        const halfCrust = new THREE.Mesh(halfCrustGeo, materials.breadCrust);
        halfCrust.castShadow = true;
        halfCrust.receiveShadow = true;
        breadGroup.add(halfCrust);

        // 2. Solid Cut Cross-Section Face Cap along z = 0
        // Seamlessly matches the breadProfile on both sides
        const capShape = new THREE.Shape();
        capShape.moveTo(-0.92, 0);
        capShape.lineTo(0.92, 0);
        capShape.bezierCurveTo(0.96, 0.08, 0.94, 0.20, 0.82, 0.30);
        capShape.bezierCurveTo(0.68, 0.25, 0.52, 0.16, 0.30, 0.13);
        capShape.lineTo(0, 0.13);
        capShape.lineTo(-0.30, 0.13);
        capShape.bezierCurveTo(-0.52, 0.16, -0.68, 0.25, -0.82, 0.30);
        capShape.bezierCurveTo(-0.94, 0.20, -0.96, 0.08, -0.92, 0);
        capShape.closePath();

        const capGeo = new THREE.ShapeGeometry(capShape);
        const capMesh = new THREE.Mesh(capGeo, materials.breadCrumb);
        capMesh.position.set(0, 0, 0);
        capMesh.castShadow = true;
        breadGroup.add(capMesh);

        // Half Chekich star accent in center basin
        const halfStampGeo = new THREE.CylinderGeometry(0.20, 0.20, 0.03, 16, 1, false, -Math.PI / 2, Math.PI);
        const halfStamp = new THREE.Mesh(halfStampGeo, materials.breadCrust);
        halfStamp.position.set(0, 0.14, 0);
        breadGroup.add(halfStamp);

        // Center on the platter
        breadGroup.position.set(0, 0.02, -0.42);
        breadGroup.rotation.y = 0.25;
      } else {
        // --- WHOLE BREAD (Non butun) ---
        // Full 360-degree seamless solid bread
        const wholeCrustGeo = new THREE.LatheGeometry(breadProfile, 42, 0, Math.PI * 2);
        const wholeCrust = new THREE.Mesh(wholeCrustGeo, materials.breadCrust);
        wholeCrust.castShadow = true;
        wholeCrust.receiveShadow = true;
        breadGroup.add(wholeCrust);

        // Center Chekich floral button
        const stampBtnGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.03, 20);
        const stampBtn = new THREE.Mesh(stampBtnGeo, materials.breadCrust);
        stampBtn.position.set(0, 0.14, 0);
        breadGroup.add(stampBtn);

        breadGroup.position.set(0, 0.02, 0);
        breadGroup.rotation.y = 0.15;
      }

      dishGroup.add(breadGroup);
      return dishGroup;
    }

    // -------------------------------------------------------------------------
    // 2. CHOY (Traditional Uzbek Tea Set with Choynak & Piyola)
    // -------------------------------------------------------------------------
    if (cat === 'choy') {
      const isGreen = name.includes("ko'k") || name.includes("kok");
      const teaLiquidMat = isGreen ? materials.greenTeaLiquid : materials.blackTeaLiquid;

      dishGroup.add(buildServingPlatter(materials));

      // Traditional Uzbek Teapot (Choynak)
      const choynakGroup = new THREE.Group();

      // Teapot Body (bulbous sphere/lathe)
      const bodyGeo = new THREE.SphereGeometry(0.65, 24, 18);
      bodyGeo.scale(1, 0.85, 1);
      const body = new THREE.Mesh(bodyGeo, materials.paxtaCeramic);
      body.position.y = 0.58;
      body.castShadow = true;
      choynakGroup.add(body);

      // Teapot Base foot
      const footGeo = new THREE.CylinderGeometry(0.38, 0.42, 0.1, 20);
      const foot = new THREE.Mesh(footGeo, materials.goldAccent);
      foot.position.y = 0.08;
      choynakGroup.add(foot);

      // Teapot Neck & Lid
      const neckGeo = new THREE.CylinderGeometry(0.36, 0.38, 0.12, 20);
      const neck = new THREE.Mesh(neckGeo, materials.goldAccent);
      neck.position.y = 1.06;
      choynakGroup.add(neck);

      const lidGeo = new THREE.SphereGeometry(0.34, 18, 12);
      lidGeo.scale(1, 0.4, 1);
      const lid = new THREE.Mesh(lidGeo, materials.paxtaCeramic);
      lid.position.y = 1.14;
      choynakGroup.add(lid);

      const lidKnobGeo = new THREE.SphereGeometry(0.08, 12, 10);
      const lidKnob = new THREE.Mesh(lidKnobGeo, materials.goldAccent);
      lidKnob.position.y = 1.3;
      choynakGroup.add(lidKnob);

      // Spout (curved tube/cone)
      const spoutGeo = new THREE.CylinderGeometry(0.09, 0.15, 0.65, 16);
      const spout = new THREE.Mesh(spoutGeo, materials.paxtaCeramic);
      spout.position.set(-0.62, 0.78, 0);
      spout.rotation.z = Math.PI / 3.4;
      choynakGroup.add(spout);

      // Handle (torus curve)
      const handleGeo = new THREE.TorusGeometry(0.32, 0.05, 12, 20, Math.PI);
      const handle = new THREE.Mesh(handleGeo, materials.goldAccent);
      handle.position.set(0.68, 0.64, 0);
      handle.rotation.z = -Math.PI / 2;
      choynakGroup.add(handle);

      choynakGroup.position.set(0.42, 0, 0);
      dishGroup.add(choynakGroup);

      // Uzbek Tea Bowl (Piyola)
      const piyolaGroup = new THREE.Group();

      const bowlGeo = new THREE.CylinderGeometry(0.44, 0.22, 0.38, 24, 1, true);
      const bowl = new THREE.Mesh(bowlGeo, materials.paxtaCeramic);
      bowl.position.y = 0.22;
      piyolaGroup.add(bowl);

      const bowlBaseGeo = new THREE.CylinderGeometry(0.22, 0.24, 0.05, 20);
      const bowlBase = new THREE.Mesh(bowlBaseGeo, materials.goldAccent);
      bowlBase.position.y = 0.04;
      piyolaGroup.add(bowlBase);

      // Hot fragrant tea liquid surface
      const teaSurfaceGeo = new THREE.CylinderGeometry(0.39, 0.39, 0.02, 24);
      const teaSurface = new THREE.Mesh(teaSurfaceGeo, teaLiquidMat);
      teaSurface.position.y = 0.34;
      piyolaGroup.add(teaSurface);

      // Mint leaf floating
      const mintLeafGeo = new THREE.PlaneGeometry(0.12, 0.08);
      const mintLeaf = new THREE.Mesh(mintLeafGeo, materials.freshHerbs);
      mintLeaf.rotation.x = -Math.PI / 2;
      mintLeaf.position.set(0.05, 0.36, -0.04);
      piyolaGroup.add(mintLeaf);

      piyolaGroup.position.set(-0.85, 0, 0.22);
      dishGroup.add(piyolaGroup);

      return dishGroup;
    }

    // -------------------------------------------------------------------------
    // 3. SHASHLIK & KABOB (Main Menu - 26 Items)
    // -------------------------------------------------------------------------

    // Base Platter and Garnish
    dishGroup.add(buildServingPlatter(materials));
    dishGroup.add(buildGarnish(materials, 6));

    // Roasted whole chili pepper on the side
    const chiliGeo = new THREE.CylinderGeometry(0.06, 0.02, 0.8, 12);
    const chili = new THREE.Mesh(chiliGeo, materials.roastedChili);
    chili.rotation.z = Math.PI / 2.3;
    chili.rotation.y = 0.4;
    chili.position.set(0.7, 0.1, 0.55);
    dishGroup.add(chili);

    const kebabGroup = new THREE.Group();

    // Check recipe type
    const isQiyma = name.includes('qiyma') || name.includes('g`ijdivon') || name.includes("g'ijdivon") || desc.includes('qiyma');
    const isChicken = name.includes('tovuq') || name.includes('tabaki');
    const isLiver = name.includes('jigar');
    const isSpicy = name.includes('achchiq');
    const isMozzarella = name.includes('mozzarella') || name.includes('mozrarella');
    const isLavash = name.includes('lavash') || name.includes('o`rama') || name.includes("o'rama") || name.includes('non kabob');
    const isRibs = name.includes('qovurg') || name.includes('biqin');
    const isDumbaOnly = name.includes('dumba') && !name.includes('qiyma');

    if (isLavash) {
      // Lavash Rulet / Wrapped Shashlik Roll
      const skewer = buildSkewer(materials, 3.2, false);
      kebabGroup.add(skewer);

      const rollGeo = new THREE.CylinderGeometry(0.28, 0.28, 2.2, 20);
      const rollMat = materials.breadCrust;
      const roll = new THREE.Mesh(rollGeo, rollMat);
      roll.rotation.x = Math.PI / 2;
      kebabGroup.add(roll);

      // Grill mark rings
      for (let i = -0.8; i <= 0.8; i += 0.35) {
        const ringGeo = new THREE.TorusGeometry(0.285, 0.015, 6, 20);
        const ring = new THREE.Mesh(ringGeo, materials.meatStandard);
        ring.position.z = i;
        kebabGroup.add(ring);
      }
    } else if (isQiyma) {
      // Minced Meat Kebab (Dual skewer with finger-crimped wave segments)
      const skewer = buildSkewer(materials, 3.5, true);
      kebabGroup.add(skewer);

      const meatMat = isSpicy ? materials.meatSpicy : materials.meatStandard;

      // Create ribbed wavy minced kebab segments
      const segmentCount = 9;
      const segLength = 2.1 / segmentCount;
      const startZ = -1.0;

      for (let i = 0; i < segmentCount; i++) {
        const z = startZ + i * segLength;
        const segGeo = new THREE.CylinderGeometry(0.22, 0.22, segLength * 1.05, 14);
        segGeo.scale(1.3, 0.82, 1); // Flatter oval cross-section typical of pressed qiyma
        const seg = new THREE.Mesh(segGeo, meatMat);
        seg.rotation.x = Math.PI / 2;
        seg.position.set(0, 0.02, z);
        seg.castShadow = true;
        kebabGroup.add(seg);

        // Char indent between ridges
        const ridgeGeo = new THREE.TorusGeometry(0.23, 0.02, 6, 16);
        ridgeGeo.scale(1.3, 0.82, 1);
        const ridge = new THREE.Mesh(ridgeGeo, materials.meatStandard);
        ridge.position.set(0, 0.02, z + segLength / 2);
        kebabGroup.add(ridge);
      }

      // Mozzarella Cheese Melt Drizzle Overlay
      if (isMozzarella) {
        for (let i = 0; i < 6; i++) {
          const z = -0.8 + i * 0.32;
          const cheeseGeo = new THREE.TorusGeometry(0.25, 0.05, 8, 16, Math.PI);
          cheeseGeo.scale(1.35, 1, 1);
          const cheese = new THREE.Mesh(cheeseGeo, materials.meltedCheese);
          cheese.rotation.z = Math.PI;
          cheese.position.set(0, 0.12, z);
          kebabGroup.add(cheese);
        }
      }
    } else if (isChicken) {
      // Roasted Chicken Shashlik / Tabaki
      const skewer = buildSkewer(materials, 3.4, false);
      kebabGroup.add(skewer);

      const chunkCount = 5;
      for (let i = 0; i < chunkCount; i++) {
        const z = -0.9 + i * 0.44;
        const chickenGeo = new THREE.DodecahedronGeometry(0.24, 1);
        chickenGeo.scale(1.1, 0.85, 1.2);
        const chunk = new THREE.Mesh(chickenGeo, materials.meatChicken);
        chunk.position.set((Math.random() - 0.5) * 0.04, 0.02, z);
        chunk.rotation.set(Math.random() * 0.4, Math.random() * 0.4, Math.random() * 0.4);
        chunk.castShadow = true;
        kebabGroup.add(chunk);

        // Lemon wedge on end
        if (i === chunkCount - 1) {
          const lemonGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.08, 12, 1, false, 0, Math.PI);
          const lemon = new THREE.Mesh(lemonGeo, materials.goldAccent);
          lemon.position.set(0.18, 0.06, z + 0.3);
          lemon.rotation.z = Math.PI / 2;
          kebabGroup.add(lemon);
        }
      }
    } else if (isRibs) {
      // Lamb Chops / Ribs (Qovurg'a / Biqin) with exposed bone tip
      const skewer = buildSkewer(materials, 3.5, false);
      kebabGroup.add(skewer);

      const ribCount = 4;
      for (let i = 0; i < ribCount; i++) {
        const z = -0.8 + i * 0.52;
        // Meat chunk
        const ribMeatGeo = new THREE.BoxGeometry(0.48, 0.32, 0.36);
        const ribMeat = new THREE.Mesh(ribMeatGeo, materials.meatStandard);
        ribMeat.position.set(0, 0.06, z);
        ribMeat.castShadow = true;
        kebabGroup.add(ribMeat);

        // Exposed bone tip sticking out
        const boneGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.4, 8);
        const bone = new THREE.Mesh(boneGeo, materials.breadCrumb);
        bone.rotation.z = Math.PI / 2.5;
        bone.position.set(-0.35, 0.16, z);
        kebabGroup.add(bone);
      }
    } else if (isDumbaOnly) {
      // Pure Dumba (Lamb Tail Fat Skewer)
      const skewer = buildSkewer(materials, 3.4, false);
      kebabGroup.add(skewer);

      for (let i = 0; i < 6; i++) {
        const z = -1.0 + i * 0.38;
        const fatGeo = new THREE.BoxGeometry(0.38, 0.28, 0.32);
        const chunk = new THREE.Mesh(fatGeo, materials.dumbaFat);
        chunk.position.set(0, 0.04, z);
        chunk.castShadow = true;
        kebabGroup.add(chunk);
      }
    } else {
      // Classic Chunk Shashlik (Kavkaz, To'rg'amchi, Marvarid, Napalyon, etc.)
      const skewer = buildSkewer(materials, 3.5, false);
      kebabGroup.add(skewer);

      const meatMat = isLiver ? materials.meatLiver : (isSpicy ? materials.meatSpicy : materials.meatStandard);
      const isMarvarid = name.includes('marvarid');
      const chunkCount = isMarvarid ? 7 : 5;
      const step = 2.1 / chunkCount;

      for (let i = 0; i < chunkCount; i++) {
        const z = -1.0 + i * step + step / 2;

        if (isMarvarid) {
          // Spherical tender pearl meatballs
          const ballGeo = new THREE.SphereGeometry(0.18, 16, 14);
          const ball = new THREE.Mesh(ballGeo, meatMat);
          ball.position.set(0, 0.04, z);
          ball.castShadow = true;
          kebabGroup.add(ball);
        } else {
          // Hand-cut organic meat cubes
          const isFatChunk = (i === 1 || i === 3);
          const mat = isFatChunk ? materials.dumbaFat : meatMat;

          const cubeGeo = new THREE.DodecahedronGeometry(isFatChunk ? 0.21 : 0.25, 1);
          cubeGeo.scale(1.1, 0.88, 1);
          const chunk = new THREE.Mesh(cubeGeo, mat);
          chunk.position.set((Math.random() - 0.5) * 0.03, 0.04, z);
          chunk.rotation.set(Math.random() * 0.3, Math.random() * 0.3, Math.random() * 0.3);
          chunk.castShadow = true;
          kebabGroup.add(chunk);
        }
      }
    }

    // Elevate skewer slightly above the serving platter
    kebabGroup.position.y = 0.22;
    kebabGroup.rotation.y = -Math.PI / 4; // Angle across platter
    dishGroup.add(kebabGroup);

    return dishGroup;
  }

  return {
    createDish3DModel,
    getMaterials
  };
}));
