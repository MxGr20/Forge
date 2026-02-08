
const STORAGE_KEY = "forge_data_v1";

const SEED_EXERCISES = [
  {
    id: "ex-bench",
    name: "Bench Press",
    category: "Chest",
    type: "weight",
    instructions: "Flat barbell press. Touch lightly, press to lockout.",
    videoUrl: ""
  },
  {
    id: "ex-incline-db",
    name: "Incline Dumbbell Press",
    category: "Chest",
    type: "weight",
    instructions: "Press upward with control. Keep shoulders packed.",
    videoUrl: ""
  },
  {
    id: "ex-overhead-press",
    name: "Overhead Press",
    category: "Shoulders",
    type: "weight",
    instructions: "Press bar overhead. Lock out with ribs down.",
    videoUrl: ""
  },
  {
    id: "ex-pushup",
    name: "Push Up",
    category: "Chest",
    type: "weight",
    instructions: "Rigid plank. Touch chest, press up.",
    videoUrl: ""
  },
  {
    id: "ex-dips",
    name: "Dips",
    category: "Chest",
    type: "weight",
    instructions: "Lean slightly. Lower with control, press.",
    videoUrl: ""
  },
  {
    id: "ex-chest-fly",
    name: "Dumbbell Fly",
    category: "Chest",
    type: "weight",
    instructions: "Soft elbows. Wide arc, squeeze at top.",
    videoUrl: ""
  },
  {
    id: "ex-deadlift",
    name: "Deadlift",
    category: "Back",
    type: "weight",
    instructions: "Brace. Push floor away. Stand tall.",
    videoUrl: ""
  },
  {
    id: "ex-row",
    name: "Barbell Row",
    category: "Back",
    type: "weight",
    instructions: "Hinge, pull to lower ribs.",
    videoUrl: ""
  },
  {
    id: "ex-db-row",
    name: "One-Arm Dumbbell Row",
    category: "Back",
    type: "weight",
    instructions: "Hips square. Pull elbow to hip.",
    videoUrl: ""
  },
  {
    id: "ex-pullup",
    name: "Pull Up",
    category: "Back",
    type: "weight",
    instructions: "Full hang. Pull chest to bar.",
    videoUrl: ""
  },
  {
    id: "ex-assisted-pullup",
    name: "Assisted Pull Up",
    category: "Back",
    type: "assisted",
    instructions: "Use assistance. Full range of motion.",
    videoUrl: ""
  },
  {
    id: "ex-lat-pulldown",
    name: "Lat Pulldown",
    category: "Back",
    type: "weight",
    instructions: "Pull bar to upper chest.",
    videoUrl: ""
  },
  {
    id: "ex-back-squat",
    name: "Back Squat",
    category: "Legs",
    type: "weight",
    instructions: "Brace. Sit between hips and knees.",
    videoUrl: ""
  },
  {
    id: "ex-front-squat",
    name: "Front Squat",
    category: "Legs",
    type: "weight",
    instructions: "Elbows high. Stay upright.",
    videoUrl: ""
  },
  {
    id: "ex-rdl",
    name: "Romanian Deadlift",
    category: "Legs",
    type: "weight",
    instructions: "Hinge. Keep bar close.",
    videoUrl: ""
  },
  {
    id: "ex-leg-press",
    name: "Leg Press",
    category: "Legs",
    type: "weight",
    instructions: "Full range. Control the sled.",
    videoUrl: ""
  },
  {
    id: "ex-leg-curl",
    name: "Leg Curl",
    category: "Legs",
    type: "weight",
    instructions: "Slow eccentric. Squeeze at top.",
    videoUrl: ""
  },
  {
    id: "ex-leg-extension",
    name: "Leg Extension",
    category: "Legs",
    type: "weight",
    instructions: "Lift through quads. Control down.",
    videoUrl: ""
  },
  {
    id: "ex-calf-raise",
    name: "Calf Raise",
    category: "Legs",
    type: "weight",
    instructions: "Full stretch. Pause at top.",
    videoUrl: ""
  },
  {
    id: "ex-walking-lunge",
    name: "Walking Lunge",
    category: "Legs",
    type: "weight",
    instructions: "Long stride. Knee tracks toes.",
    videoUrl: ""
  },
  {
    id: "ex-hip-thrust",
    name: "Hip Thrust",
    category: "Glutes",
    type: "weight",
    instructions: "Chin tucked. Full hip extension.",
    videoUrl: ""
  },
  {
    id: "ex-barbell-curl",
    name: "Barbell Curl",
    category: "Arms",
    type: "weight",
    instructions: "Elbows still. Smooth tempo.",
    videoUrl: ""
  },
  {
    id: "ex-hammer-curl",
    name: "Hammer Curl",
    category: "Arms",
    type: "weight",
    instructions: "Neutral grip. Control both ways.",
    videoUrl: ""
  },
  {
    id: "ex-tri-pushdown",
    name: "Triceps Pushdown",
    category: "Arms",
    type: "weight",
    instructions: "Pin elbows. Full extension.",
    videoUrl: ""
  },
  {
    id: "ex-skull",
    name: "Skull Crushers",
    category: "Arms",
    type: "weight",
    instructions: "Lower to forehead. Elbows in.",
    videoUrl: ""
  },
  {
    id: "ex-plank",
    name: "Plank",
    category: "Core",
    type: "duration",
    instructions: "Neutral spine. Breathe steadily.",
    videoUrl: ""
  },
  {
    id: "ex-hanging-leg",
    name: "Hanging Leg Raise",
    category: "Core",
    type: "weight",
    instructions: "Control swing. Lift with abs.",
    videoUrl: ""
  },
  {
    id: "ex-russian-twist",
    name: "Russian Twist",
    category: "Core",
    type: "weight",
    instructions: "Rotate torso. Keep chest up.",
    videoUrl: ""
  },
  {
    id: "ex-run",
    name: "Running",
    category: "Cardio",
    type: "duration",
    instructions: "Steady pace or intervals.",
    videoUrl: ""
  },
  {
    id: "ex-cycle",
    name: "Cycling",
    category: "Cardio",
    type: "duration",
    instructions: "Maintain smooth cadence.",
    videoUrl: ""
  },
  {
    id: "ex-rowing",
    name: "Rowing",
    category: "Cardio",
    type: "duration",
    instructions: "Legs, hips, arms. Strong finish.",
    videoUrl: ""
  },
  {
    id: "ex-jumprope",
    name: "Jump Rope",
    category: "Cardio",
    type: "duration",
    instructions: "Soft knees. Small jumps.",
    videoUrl: ""
  },
  {
    id: "ex-stair",
    name: "Stair Climb",
    category: "Cardio",
    type: "duration",
    instructions: "Drive through midfoot.",
    videoUrl: ""
  },
  {
    id: "ex-elliptical",
    name: "Elliptical",
    category: "Cardio",
    type: "duration",
    instructions: "Smooth motion, steady effort.",
    videoUrl: ""
  },
  {
    id: "ex-clean-press",
    name: "Clean and Press",
    category: "Full Body",
    type: "weight",
    instructions: "Explosive clean, strict press.",
    videoUrl: ""
  },
  {
    id: "ex-kb-swing",
    name: "Kettlebell Swing",
    category: "Full Body",
    type: "weight",
    instructions: "Hip hinge. Snap hips to chest height.",
    videoUrl: ""
  }
];

const DEFAULT_STATE = {
  version: 1,
  settings: {
    units: "kg",
    restSeconds: 90,
    autoRest: true,
    warmupPercents: [40, 60, 80],
    barWeight: 20,
    plates: [25, 20, 15, 10, 5, 2.5, 1.25],
    bodyweight: 75,
    oneRmFormula: "epley"
  },
  exercises: SEED_EXERCISES,
  routines: [],
  workouts: [],
  activeWorkoutId: null
};

const ui = {
  view: "log",
  editRoutineId: null,
  statsExerciseId: null,
  exerciseSearch: ""
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function esc(str = "") {
  return String(str).replace(/[&<>"']/g, (ch) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[ch] || ch;
  });
}

function uid() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `id-${Math.random().toString(36).slice(2, 10)}`;
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
  try {
    const saved = JSON.parse(raw);
    const merged = JSON.parse(JSON.stringify(DEFAULT_STATE));
    merged.settings = { ...merged.settings, ...(saved.settings || {}) };
    merged.exercises = Array.isArray(saved.exercises) && saved.exercises.length ? saved.exercises : SEED_EXERCISES;
    merged.routines = Array.isArray(saved.routines) ? saved.routines : [];
    merged.workouts = Array.isArray(saved.workouts) ? saved.workouts : [];
    merged.activeWorkoutId = saved.activeWorkoutId || null;
    return merged;
  } catch (err) {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

let photoDB = null;

function openPhotoDB() {
  if (photoDB) return Promise.resolve(photoDB);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("forge_photos", 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore("photos", { keyPath: "id" });
    };
    req.onsuccess = () => {
      photoDB = req.result;
      resolve(photoDB);
    };
    req.onerror = () => reject(req.error);
  });
}

function idbPut(store, value) {
  return openPhotoDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(store, "readwrite");
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.objectStore(store).put(value);
    });
  });
}

function idbGet(store, key) {
  return openPhotoDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(store, "readonly");
      const req = tx.objectStore(store).get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  });
}

function idbDelete(store, key) {
  return openPhotoDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(store, "readwrite");
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.objectStore(store).delete(key);
    });
  });
}

let toastTimer = null;

function toast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2000);
}

function getExercise(id) {
  return state.exercises.find((ex) => ex.id === id);
}

function getActiveWorkout() {
  return state.workouts.find((w) => w.id === state.activeWorkoutId) || null;
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function formatDateTime(iso) {
  const d = new Date(iso);
  return d.toLocaleString();
}

function formatDuration(seconds) {
  if (!Number.isFinite(seconds)) return "-";
  const s = Math.max(0, Math.round(seconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}

function parseDuration(value) {
  if (!value) return 0;
  const raw = String(value).trim();
  if (raw.includes(":")) {
    const [m, s] = raw.split(":").map((v) => parseInt(v, 10));
    if (!Number.isFinite(m)) return 0;
    return (m * 60) + (Number.isFinite(s) ? s : 0);
  }
  const minutes = parseFloat(raw);
  return Number.isFinite(minutes) ? minutes * 60 : 0;
}

function calcOneRm(weight, reps) {
  if (!weight || !reps) return 0;
  if (state.settings.oneRmFormula === "brzycki") {
    if (reps >= 37) return 0;
    return weight * (36 / (37 - reps));
  }
  return weight * (1 + reps / 30);
}

function effectiveWeight(set, workoutBodyweight) {
  if (set.type === "weight") return set.weight || 0;
  if (set.type === "assisted") {
    const bw = set.bodyweight ?? workoutBodyweight ?? state.settings.bodyweight;
    if (!Number.isFinite(bw)) return 0;
    return Math.max(0, bw - (set.assist || 0));
  }
  return 0;
}

function setVolume(set, workoutBodyweight) {
  const weight = effectiveWeight(set, workoutBodyweight);
  if (!weight || !set.reps) return 0;
  return weight * set.reps;
}

const restTimer = {
  remaining: 0,
  interval: null
};

function updateTimerUI() {
  const el = $("#timerDisplay");
  if (!el) return;
  const display = restTimer.remaining > 0 ? restTimer.remaining : state.settings.restSeconds;
  el.textContent = formatDuration(display);
}

function startTimer(seconds) {
  const duration = Math.max(0, Math.round(seconds));
  restTimer.remaining = duration;
  updateTimerUI();
  if (restTimer.interval) clearInterval(restTimer.interval);
  if (!duration) return;
  restTimer.interval = setInterval(() => {
    restTimer.remaining -= 1;
    updateTimerUI();
    if (restTimer.remaining <= 0) {
      stopTimer(false);
      toast("Rest complete");
    }
  }, 1000);
}

function stopTimer(clear = true) {
  if (restTimer.interval) {
    clearInterval(restTimer.interval);
    restTimer.interval = null;
  }
  if (clear) restTimer.remaining = 0;
  updateTimerUI();
}

function setView(view) {
  ui.view = view;
  $$(".view").forEach((section) => {
    section.classList.toggle("active", section.id === `view-${view}`);
  });
  $$(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
}

function startWorkout(routineId = null) {
  const routine = routineId ? state.routines.find((r) => r.id === routineId) : null;
  const now = new Date().toISOString();
  const workout = {
    id: uid(),
    name: routine ? routine.name : "Workout",
    createdAt: now,
    routineId: routine ? routine.id : null,
    bodyweight: state.settings.bodyweight,
    notes: "",
    photoIds: [],
    items: []
  };
  if (routine) {
    workout.items = routine.items.map((item) => ({
      id: uid(),
      exerciseId: item.exerciseId,
      group: item.group || "",
      note: item.note || "",
      sets: []
    }));
  }
  state.workouts.unshift(workout);
  state.activeWorkoutId = workout.id;
  saveState();
  renderLog();
  toast("Workout started");
}

function endWorkout() {
  const active = getActiveWorkout();
  if (!active) return;
  active.endedAt = new Date().toISOString();
  state.activeWorkoutId = null;
  saveState();
  renderLog();
  toast("Workout saved");
}

function addWorkoutExercise(exerciseId, group = "") {
  const workout = getActiveWorkout();
  if (!workout) return;
  const exercise = getExercise(exerciseId);
  if (!exercise) return;
  workout.items.push({
    id: uid(),
    exerciseId: exercise.id,
    group: group || "",
    note: "",
    sets: []
  });
  saveState();
  renderLog();
}

function removeWorkoutExercise(itemId) {
  const workout = getActiveWorkout();
  if (!workout) return;
  workout.items = workout.items.filter((item) => item.id !== itemId);
  saveState();
  renderLog();
}

function addSetFromCard(button) {
  const workout = getActiveWorkout();
  if (!workout) return;
  const itemId = button.dataset.itemId;
  const item = workout.items.find((it) => it.id === itemId);
  if (!item) return;
  const exercise = getExercise(item.exerciseId);
  if (!exercise) return;
  const card = button.closest(".exercise-card");
  if (!card) return;

  const tag = card.querySelector("[data-field='tag']")?.value || "work";
  let set = { id: uid(), type: exercise.type, tag };

  if (exercise.type === "weight") {
    const weight = parseFloat(card.querySelector("[data-field='weight']")?.value);
    const reps = parseInt(card.querySelector("[data-field='reps']")?.value, 10);
    if (!Number.isFinite(weight) || !Number.isFinite(reps)) {
      toast("Enter weight and reps");
      return;
    }
    set.weight = weight;
    set.reps = reps;
  }

  if (exercise.type === "assisted") {
    const assist = parseFloat(card.querySelector("[data-field='assist']")?.value);
    const reps = parseInt(card.querySelector("[data-field='reps']")?.value, 10);
    if (!Number.isFinite(assist) || !Number.isFinite(reps)) {
      toast("Enter assist and reps");
      return;
    }
    set.assist = assist;
    set.reps = reps;
    set.bodyweight = workout.bodyweight;
  }

  if (exercise.type === "duration") {
    const durationRaw = card.querySelector("[data-field='duration']")?.value;
    const distance = parseFloat(card.querySelector("[data-field='distance']")?.value);
    const durationSec = parseDuration(durationRaw);
    if (!durationSec) {
      toast("Enter a duration (mm:ss or minutes)");
      return;
    }
    set.durationSec = durationSec;
    if (Number.isFinite(distance)) set.distance = distance;
  }

  item.sets.push(set);
  saveState();
  renderLog();
  if (state.settings.autoRest) startTimer(state.settings.restSeconds);
}

function removeSet(itemId, setId) {
  const workout = getActiveWorkout();
  if (!workout) return;
  const item = workout.items.find((it) => it.id === itemId);
  if (!item) return;
  item.sets = item.sets.filter((set) => set.id !== setId);
  saveState();
  renderLog();
}

function createRoutine() {
  const input = $("#newRoutineName");
  if (!input) return;
  const name = input.value.trim();
  if (!name) {
    toast("Name your routine");
    return;
  }
  const routine = {
    id: uid(),
    name,
    items: []
  };
  state.routines.push(routine);
  ui.editRoutineId = routine.id;
  input.value = "";
  saveState();
  renderRoutines();
}

function deleteRoutine(routineId) {
  state.routines = state.routines.filter((r) => r.id !== routineId);
  if (ui.editRoutineId === routineId) ui.editRoutineId = null;
  saveState();
  renderRoutines();
}

function addRoutineItem() {
  const routine = getEditRoutine();
  if (!routine) {
    toast("Create or select a routine");
    return;
  }
  const exId = $("#routineExerciseSelect")?.value;
  if (!exId) return;
  routine.items.push({
    id: uid(),
    exerciseId: exId,
    group: $("#routineGroup")?.value.trim() || "",
    note: $("#routineNote")?.value.trim() || ""
  });
  saveState();
  renderRoutines();
}

function removeRoutineItem(routineId, itemId) {
  const routine = state.routines.find((r) => r.id === routineId);
  if (!routine) return;
  routine.items = routine.items.filter((item) => item.id !== itemId);
  saveState();
  renderRoutines();
}

function moveRoutineItem(routineId, itemId, delta) {
  const routine = state.routines.find((r) => r.id === routineId);
  if (!routine) return;
  const index = routine.items.findIndex((item) => item.id === itemId);
  if (index < 0) return;
  const newIndex = index + delta;
  if (newIndex < 0 || newIndex >= routine.items.length) return;
  const [moved] = routine.items.splice(index, 1);
  routine.items.splice(newIndex, 0, moved);
  saveState();
  renderRoutines();
}

function getEditRoutine() {
  if (!ui.editRoutineId) return null;
  return state.routines.find((r) => r.id === ui.editRoutineId) || null;
}

function createExercise() {
  const name = $("#exerciseName")?.value.trim();
  const category = $("#exerciseCategory")?.value.trim();
  const type = $("#exerciseType")?.value || "weight";
  const instructions = $("#exerciseInstructions")?.value.trim();
  const videoUrl = $("#exerciseVideo")?.value.trim();
  if (!name) {
    toast("Exercise needs a name");
    return;
  }
  const exercise = {
    id: uid(),
    name,
    category,
    type,
    instructions,
    videoUrl
  };
  state.exercises.push(exercise);
  $("#exerciseName").value = "";
  $("#exerciseCategory").value = "";
  $("#exerciseInstructions").value = "";
  $("#exerciseVideo").value = "";
  saveState();
  renderExercises();
  toast("Exercise added");
}

function exerciseInUse(exerciseId) {
  const inRoutines = state.routines.some((r) => r.items.some((item) => item.exerciseId === exerciseId));
  const inWorkouts = state.workouts.some((w) => w.items.some((item) => item.exerciseId === exerciseId));
  return inRoutines || inWorkouts;
}

function deleteExercise(exerciseId) {
  if (exerciseInUse(exerciseId)) {
    toast("Exercise is used in routines or workouts");
    return;
  }
  state.exercises = state.exercises.filter((ex) => ex.id !== exerciseId);
  saveState();
  renderExercises();
}
function renderLog() {
  const active = getActiveWorkout();
  const noWorkout = $("#noWorkout");
  const activeWrap = $("#activeWorkout");

  if (noWorkout && activeWrap) {
    if (!active) {
      noWorkout.classList.remove("hidden");
      activeWrap.classList.add("hidden");
    } else {
      noWorkout.classList.add("hidden");
      activeWrap.classList.remove("hidden");
    }
  }

  const routineSelect = $("#startRoutineSelect");
  if (routineSelect) {
    routineSelect.innerHTML = state.routines.length
      ? state.routines.map((r) => `<option value="${r.id}">${esc(r.name)}</option>`).join("")
      : "<option value=\"\">No routines yet</option>";
  }

  if (!active) {
    renderRecentWorkouts();
    return;
  }

  const nameInput = $("[data-field='workout-name']");
  const bwInput = $("[data-field='workout-bodyweight']");
  const notesInput = $("[data-field='workout-notes']");
  if (nameInput) nameInput.value = active.name || "";
  if (bwInput) bwInput.value = Number.isFinite(active.bodyweight) ? active.bodyweight : "";
  if (notesInput) notesInput.value = active.notes || "";

  const addSelect = $("#addExerciseSelect");
  if (addSelect) {
    addSelect.innerHTML = state.exercises
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((ex) => `<option value="${ex.id}">${esc(ex.name)}</option>`)
      .join("");
  }

  const container = $("#workoutExercises");
  if (container) {
    if (!active.items.length) {
      container.innerHTML = "<div class=\"empty\">Add an exercise to start logging.</div>";
    } else {
      container.innerHTML = active.items.map((item) => renderWorkoutExercise(item, active)).join("");
    }
  }

  updateTimerUI();
  renderPhotoStrip(active.photoIds || []);
  renderRecentWorkouts();
}

function renderWorkoutExercise(item, workout) {
  const exercise = getExercise(item.exerciseId);
  if (!exercise) return "";
  const groupLabel = item.group ? `Superset ${esc(item.group)}` : "Single";
  const meta = `${esc(exercise.category || "General")} � ${exercise.type}`;
  const setsHeader = "<div class=\"set-row header\"><div>#</div><div>Load</div><div>Reps/Time</div><div>Tag</div><div></div></div>";
  const setsRows = item.sets
    .map((set, index) => renderSetRow(set, index, item.id, workout))
    .join("");
  const setsHtml = item.sets.length ? setsHeader + setsRows : "<div class=\"muted small\">No sets yet.</div>";

  let addFields = "";
  if (exercise.type === "weight") {
    addFields = `
      <input type="number" step="0.5" data-field="weight" placeholder="Weight (kg)">
      <input type="number" step="1" data-field="reps" placeholder="Reps">
      ${renderTagSelect()}
      <button class="primary" data-action="add-set" data-item-id="${item.id}">Add Set</button>
    `;
  }

  if (exercise.type === "assisted") {
    addFields = `
      <input type="number" step="0.5" data-field="assist" placeholder="Assist (kg)">
      <input type="number" step="1" data-field="reps" placeholder="Reps">
      ${renderTagSelect()}
      <button class="primary" data-action="add-set" data-item-id="${item.id}">Add Set</button>
    `;
  }

  if (exercise.type === "duration") {
    addFields = `
      <input type="text" data-field="duration" placeholder="mm:ss">
      <input type="number" step="0.1" data-field="distance" placeholder="Distance (km)">
      ${renderTagSelect()}
      <button class="primary" data-action="add-set" data-item-id="${item.id}">Add Set</button>
    `;
  }

  return `
    <div class="card exercise-card" data-item-id="${item.id}">
      <div class="exercise-header">
        <div>
          <div class="title">${esc(exercise.name)}</div>
          <div class="exercise-meta">${meta} � ${groupLabel}</div>
        </div>
        <button class="ghost small" data-action="remove-workout-exercise" data-item-id="${item.id}">Remove</button>
      </div>
      <div class="sets">${setsHtml}</div>
      <div class="add-set">${addFields}</div>
    </div>
  `;
}

function renderSetRow(set, index, itemId, workout) {
  let load = "-";
  let reps = "-";
  if (set.type === "weight") {
    load = `${set.weight} kg`;
    reps = `${set.reps} reps`;
  }
  if (set.type === "assisted") {
    load = `Assist ${set.assist} kg`;
    reps = `${set.reps} reps`;
  }
  if (set.type === "duration") {
    load = set.distance ? `${set.distance} km` : "-";
    reps = formatDuration(set.durationSec);
  }
  const tag = set.tag || "work";
  return `
    <div class="set-row">
      <div>${index + 1}</div>
      <div>${esc(load)}</div>
      <div>${esc(reps)}</div>
      <div><span class="set-tag">${esc(tag)}</span></div>
      <div><button class="ghost small" data-action="remove-set" data-item-id="${itemId}" data-set-id="${set.id}">X</button></div>
    </div>
  `;
}

function renderTagSelect() {
  return `
    <select data-field="tag">
      <option value="work">Work</option>
      <option value="warmup">Warm Up</option>
      <option value="failure">Failure</option>
      <option value="drop">Drop</option>
    </select>
  `;
}

function renderRecentWorkouts() {
  const list = $("#recentWorkouts");
  if (!list) return;
  const recent = state.workouts.filter((w) => w.id !== state.activeWorkoutId).slice(0, 6);
  if (!recent.length) {
    list.innerHTML = "<div class=\"muted small\">No saved workouts yet.</div>";
    return;
  }
  list.innerHTML = recent.map((workout) => {
    const volume = workoutVolume(workout);
    return `
      <div class="result-item">
        <div>
          <div class="title">${esc(workout.name || "Workout")}</div>
          <div class="muted small">${formatDate(workout.createdAt)}</div>
        </div>
        <div class="title">${volume.toFixed(0)} kg</div>
      </div>
    `;
  }).join("");
}

function workoutVolume(workout) {
  let volume = 0;
  workout.items.forEach((item) => {
    item.sets.forEach((set) => {
      if (set.type === "duration") return;
      volume += setVolume(set, workout.bodyweight);
    });
  });
  return volume;
}

function renderRoutines() {
  const routineList = $("#routineList");
  if (routineList) {
    routineList.innerHTML = state.routines.length
      ? state.routines.map((routine) => {
        return `
          <div class="card">
            <div class="row space">
              <div>
                <div class="title">${esc(routine.name)}</div>
                <div class="muted small">${routine.items.length} exercises</div>
              </div>
              <div class="row wrap">
                <button class="primary" data-action="start-routine" data-routine-id="${routine.id}">Start</button>
                <button class="ghost" data-action="edit-routine" data-routine-id="${routine.id}">Edit</button>
                <button class="ghost" data-action="delete-routine" data-routine-id="${routine.id}">Delete</button>
              </div>
            </div>
          </div>
        `;
      }).join("")
      : "<div class=\"muted small\">No routines yet.</div>";
  }

  const routineSelect = $("#routineSelect");
  if (routineSelect) {
    routineSelect.innerHTML = state.routines.length
      ? state.routines.map((r) => `<option value="${r.id}">${esc(r.name)}</option>`).join("")
      : "<option value=\"\">No routines yet</option>";

    if (!ui.editRoutineId && state.routines.length) {
      ui.editRoutineId = state.routines[0].id;
    }
    if (ui.editRoutineId) routineSelect.value = ui.editRoutineId;
  }

  const routineExerciseSelect = $("#routineExerciseSelect");
  if (routineExerciseSelect) {
    routineExerciseSelect.innerHTML = state.exercises
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((ex) => `<option value="${ex.id}">${esc(ex.name)}</option>`)
      .join("");
  }

  const builder = $("#routineItems");
  const routine = getEditRoutine();
  if (builder) {
    if (!routine) {
      builder.innerHTML = "<div class=\"muted small\">Select a routine to edit.</div>";
    } else if (!routine.items.length) {
      builder.innerHTML = "<div class=\"muted small\">Add exercises to build this routine.</div>";
    } else {
      builder.innerHTML = routine.items.map((item) => {
        const ex = getExercise(item.exerciseId);
        return `
          <div class="result-item">
            <div>
              <div class="title">${esc(ex?.name || "Unknown")}</div>
              <div class="muted small">${esc(item.group || "Single")} ${item.note ? `� ${esc(item.note)}` : ""}</div>
            </div>
            <div class="row wrap">
              <button class="ghost small" data-action="move-routine-item-up" data-routine-id="${routine.id}" data-item-id="${item.id}">Up</button>
              <button class="ghost small" data-action="move-routine-item-down" data-routine-id="${routine.id}" data-item-id="${item.id}">Down</button>
              <button class="ghost small" data-action="remove-routine-item" data-routine-id="${routine.id}" data-item-id="${item.id}">Remove</button>
            </div>
          </div>
        `;
      }).join("");
    }
  }
}

function renderExercises() {
  const list = $("#exerciseList");
  if (!list) return;
  const term = ui.exerciseSearch.toLowerCase();
  const exercises = state.exercises
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((ex) => ex.name.toLowerCase().includes(term) || (ex.category || "").toLowerCase().includes(term));

  list.innerHTML = exercises.length
    ? exercises.map((ex) => {
      const video = ex.videoUrl
        ? `<div class=\"muted small\">Video: <a href=\"${esc(ex.videoUrl)}\" target=\"_blank\" rel=\"noopener\">${esc(ex.videoUrl)}</a></div>`
        : "";
      return `
        <div class="card">
          <div class="row space">
            <div>
              <div class="title">${esc(ex.name)}</div>
              <div class="muted small">${esc(ex.category || "General")} � ${ex.type}</div>
            </div>
            <button class="ghost small" data-action="delete-exercise" data-exercise-id="${ex.id}">Delete</button>
          </div>
          ${ex.instructions ? `<div class=\"muted small\">${esc(ex.instructions)}</div>` : ""}
          ${video}
        </div>
      `;
    }).join("")
    : "<div class=\"muted small\">No exercises found.</div>";
}

function computeExerciseStats(exerciseId) {
  const exercise = getExercise(exerciseId);
  if (!exercise) return null;

  let maxWeight = 0;
  let maxReps = 0;
  let maxOneRm = 0;
  let totalVolume = 0;
  const progression = [];

  state.workouts.forEach((workout) => {
    let dayVolume = 0;
    let dayOneRm = 0;
    workout.items.forEach((item) => {
      if (item.exerciseId !== exerciseId) return;
      item.sets.forEach((set) => {
        if (exercise.type === "duration") {
          if (set.durationSec) {
            totalVolume += set.durationSec;
            dayVolume += set.durationSec;
            maxReps = Math.max(maxReps, set.durationSec);
          }
          return;
        }
        if (!set.reps) return;
        const weight = effectiveWeight(set, workout.bodyweight);
        if (!weight) return;
        maxWeight = Math.max(maxWeight, weight);
        maxReps = Math.max(maxReps, set.reps);
        const oneRm = calcOneRm(weight, set.reps);
        maxOneRm = Math.max(maxOneRm, oneRm);
        dayOneRm = Math.max(dayOneRm, oneRm);
        const volume = weight * set.reps;
        totalVolume += volume;
        dayVolume += volume;
      });
    });
    if (dayVolume > 0) {
      progression.push({ date: workout.createdAt, volume: dayVolume, oneRm: dayOneRm });
    }
  });

  progression.sort((a, b) => new Date(a.date) - new Date(b.date));
  return { exercise, maxWeight, maxReps, maxOneRm, totalVolume, progression };
}

function renderStats() {
  const select = $("#statsExerciseSelect");
  if (select) {
    select.innerHTML = state.exercises
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((ex) => `<option value="${ex.id}">${esc(ex.name)}</option>`)
      .join("");
    if (!ui.statsExerciseId) ui.statsExerciseId = state.exercises[0]?.id || null;
    if (ui.statsExerciseId) select.value = ui.statsExerciseId;
  }

  if (!ui.statsExerciseId) return;
  const stats = computeExerciseStats(ui.statsExerciseId);
  if (!stats) return;

  const isDuration = stats.exercise.type === "duration";

  $("#stat1rm").textContent = isDuration ? "-" : `${stats.maxOneRm.toFixed(1)} kg`;
  $("#statMaxWeight").textContent = isDuration ? "-" : `${stats.maxWeight.toFixed(1)} kg`;
  $("#statMaxReps").textContent = isDuration
    ? formatDuration(stats.maxReps)
    : `${stats.maxReps}`;
  $("#statVolume").textContent = isDuration
    ? `${formatDuration(stats.totalVolume)}`
    : `${stats.totalVolume.toFixed(0)} kg`;

  const volumeData = stats.progression.map((p) => ({ label: formatDate(p.date), value: p.volume }));
  const oneRmData = stats.progression.map((p) => ({ label: formatDate(p.date), value: p.oneRm }));

  renderLineChart($("#volumeChart"), volumeData, "#2c7a7b");
  renderLineChart($("#oneRmChart"), isDuration ? [] : oneRmData, "#d97706");
}

function renderLineChart(container, data, color) {
  if (!container) return;
  if (!data.length) {
    container.innerHTML = "<div class=\"muted small\">No data yet.</div>";
    return;
  }
  const width = 320;
  const height = 160;
  const pad = 20;
  const values = data.map((d) => d.value);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  const step = data.length > 1 ? (width - pad * 2) / (data.length - 1) : 0;
  const points = data.map((d, i) => {
    const x = pad + step * i;
    const y = height - pad - ((d.value - min) / span) * (height - pad * 2);
    return `${x},${y}`;
  }).join(" ");
  const last = data[data.length - 1];
  const lastX = pad + step * (data.length - 1);
  const lastY = height - pad - ((last.value - min) / span) * (height - pad * 2);

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" width="100%" height="160" preserveAspectRatio="none">
      <polyline points="${points}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="${lastX}" cy="${lastY}" r="4" fill="${color}" />
    </svg>
  `;
}

function renderTools() {
  $("#restSeconds").value = state.settings.restSeconds;
  $("#autoRest").checked = !!state.settings.autoRest;
  $("#warmupPercents").value = state.settings.warmupPercents.join(", ");
  $("#barWeight").value = state.settings.barWeight;
  $("#plates").value = state.settings.plates.join(", ");
  $("#bodyweight").value = state.settings.bodyweight;
  $("#oneRmFormula").value = state.settings.oneRmFormula;
  $("#plateBarWeight").value = state.settings.barWeight;
}

function getWeightIncrement() {
  const plates = state.settings.plates.length ? state.settings.plates : [2.5];
  const min = Math.min(...plates);
  return min * 2;
}

function roundToIncrement(weight, increment) {
  return Math.round(weight / increment) * increment;
}

function calcWarmup() {
  const input = parseFloat($("#warmupWeight").value);
  if (!Number.isFinite(input)) {
    toast("Enter a working weight");
    return;
  }
  const increment = getWeightIncrement();
  const results = state.settings.warmupPercents.map((percent) => {
    const weight = roundToIncrement(input * (percent / 100), increment);
    return { percent, weight };
  });
  const list = $("#warmupResults");
  list.innerHTML = results.map((r) => {
    return `<div class="result-item"><div>${r.percent}%</div><div>${r.weight.toFixed(1)} kg</div></div>`;
  }).join("");
}

function calcPlates() {
  const target = parseFloat($("#plateTarget").value);
  const bar = parseFloat($("#plateBarWeight").value || state.settings.barWeight);
  if (!Number.isFinite(target)) {
    toast("Enter target weight");
    return;
  }
  const perSide = (target - bar) / 2;
  if (perSide < 0) {
    toast("Target is below bar weight");
    return;
  }
  const plates = state.settings.plates.slice().sort((a, b) => b - a);
  let remaining = perSide;
  const counts = [];
  plates.forEach((plate) => {
    const count = Math.floor(remaining / plate + 1e-6);
    if (count > 0) {
      counts.push({ plate, count });
      remaining -= count * plate;
    }
  });
  const list = $("#plateResults");
  if (!counts.length) {
    list.innerHTML = "<div class=\"muted small\">No plates needed.</div>";
    return;
  }
  list.innerHTML = counts.map((c) => {
    return `<div class="result-item"><div>${c.plate} kg</div><div>${c.count} per side</div></div>`;
  }).join("");
}
function exportCsv() {
  const rows = [];
  rows.push([
    "Date",
    "Workout",
    "Exercise",
    "Type",
    "Set",
    "WeightKg",
    "AssistKg",
    "Reps",
    "DurationSec",
    "Tag",
    "VolumeKg",
    "Notes"
  ]);

  state.workouts.forEach((workout) => {
    workout.items.forEach((item) => {
      const exercise = getExercise(item.exerciseId);
      item.sets.forEach((set, idx) => {
        const weight = set.type === "weight" ? set.weight : effectiveWeight(set, workout.bodyweight);
        const assist = set.type === "assisted" ? set.assist : "";
        const reps = set.reps || "";
        const duration = set.durationSec || "";
        const volume = set.type === "duration" ? "" : setVolume(set, workout.bodyweight).toFixed(1);
        rows.push([
          formatDateTime(workout.createdAt),
          workout.name || "Workout",
          exercise?.name || "Unknown",
          set.type,
          idx + 1,
          weight || "",
          assist,
          reps,
          duration,
          set.tag || "",
          volume,
          workout.notes || ""
        ]);
      });
    });
  });

  const csv = rows.map((row) => row.map(csvEscape).join(",")).join("\n");
  downloadFile(csv, "forge-data.csv", "text/csv");
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  downloadBlob(blob, "forge-backup.json");
}

function csvEscape(value) {
  const str = value == null ? "" : String(value);
  if (/[,\n\"]/.test(str)) {
    return `"${str.replace(/\"/g, '""')}"`;
  }
  return str;
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  downloadBlob(blob, filename);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function shareRoutine(routineId) {
  const routine = state.routines.find((r) => r.id === routineId) || getEditRoutine();
  if (!routine) return;
  const lines = routine.items.map((item) => {
    const ex = getExercise(item.exerciseId);
    const group = item.group ? ` [${item.group}]` : "";
    return `${ex?.name || "Unknown"}${group}`;
  });
  const text = `${routine.name}\n${lines.join("\n")}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: routine.name, text });
      return;
    } catch (err) {
      return;
    }
  }
  await navigator.clipboard.writeText(text);
  toast("Routine copied to clipboard");
}

async function shareWorkout() {
  const workout = getActiveWorkout();
  if (!workout) {
    toast("No active workout");
    return;
  }
  const lines = workout.items.map((item) => {
    const ex = getExercise(item.exerciseId);
    return `${ex?.name || "Unknown"} (${item.sets.length} sets)`;
  });
  const text = `${workout.name}\n${lines.join("\n")}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: workout.name, text });
      return;
    } catch (err) {
      return;
    }
  }
  await navigator.clipboard.writeText(text);
  toast("Workout copied to clipboard");
}

async function handlePhotoUpload(files) {
  const workout = getActiveWorkout();
  if (!workout) return;
  const fileList = Array.from(files || []);
  for (const file of fileList) {
    const id = uid();
    await idbPut("photos", { id, blob: file, createdAt: Date.now() });
    workout.photoIds.push(id);
  }
  saveState();
  renderLog();
}

async function renderPhotoStrip(photoIds) {
  const strip = $("#photoStrip");
  if (!strip) return;
  strip.innerHTML = "";
  for (const id of photoIds) {
    try {
      const record = await idbGet("photos", id);
      if (!record) continue;
      const url = URL.createObjectURL(record.blob);
      const img = document.createElement("img");
      img.src = url;
      img.onload = () => URL.revokeObjectURL(url);
      strip.appendChild(img);
    } catch (err) {
      continue;
    }
  }
}

function updateSetting(key, value, element) {
  if (key === "autoRest") {
    state.settings.autoRest = element.checked;
  } else if (key === "warmupPercents") {
    state.settings.warmupPercents = value
      .split(",")
      .map((v) => parseFloat(v.trim()))
      .filter((v) => Number.isFinite(v));
  } else if (key === "plates") {
    state.settings.plates = value
      .split(",")
      .map((v) => parseFloat(v.trim()))
      .filter((v) => Number.isFinite(v))
      .sort((a, b) => b - a);
  } else if (key === "restSeconds") {
    state.settings.restSeconds = Math.max(10, parseInt(value, 10) || 90);
    updateTimerUI();
  } else if (key === "barWeight") {
    state.settings.barWeight = parseFloat(value) || 20;
  } else if (key === "bodyweight") {
    state.settings.bodyweight = parseFloat(value) || 0;
  } else if (key === "oneRmFormula") {
    state.settings.oneRmFormula = value;
  }
  saveState();
}

function handleInputEvents() {
  document.addEventListener("input", (event) => {
    const target = event.target;
    if (target.id === "exerciseSearch") {
      ui.exerciseSearch = target.value;
      renderExercises();
      return;
    }
    if (target.dataset.field === "workout-name") {
      const workout = getActiveWorkout();
      if (workout) workout.name = target.value;
      saveState();
      return;
    }
    if (target.dataset.field === "workout-bodyweight") {
      const workout = getActiveWorkout();
      if (workout) workout.bodyweight = parseFloat(target.value);
      saveState();
      return;
    }
    if (target.dataset.field === "workout-notes") {
      const workout = getActiveWorkout();
      if (workout) workout.notes = target.value;
      saveState();
    }
    if (target.dataset.setting) {
      updateSetting(target.dataset.setting, target.value, target);
    }
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target.id === "statsExerciseSelect") {
      ui.statsExerciseId = target.value;
      renderStats();
    }
    if (target.id === "routineSelect") {
      ui.editRoutineId = target.value;
      renderRoutines();
    }
    if (target.id === "workoutPhotos") {
      handlePhotoUpload(target.files);
      target.value = "";
    }
    if (target.id === "importJsonInput") {
      importJson(target.files[0]);
      target.value = "";
    }
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    if (action === "nav") {
      setView(button.dataset.view);
      return;
    }
    if (action === "start-quick") {
      startWorkout();
      return;
    }
    if (action === "start-routine") {
      const routineId = button.dataset.routineId || $("#startRoutineSelect")?.value || null;
      if (!routineId) {
        toast("Create a routine first");
        return;
      }
      startWorkout(routineId);
      return;
    }
    if (action === "end-workout") {
      endWorkout();
      return;
    }
    if (action === "add-workout-exercise") {
      const exerciseId = $("#addExerciseSelect")?.value;
      const group = $("#addExerciseGroup")?.value.trim();
      if (!exerciseId) return;
      addWorkoutExercise(exerciseId, group);
      return;
    }
    if (action === "remove-workout-exercise") {
      removeWorkoutExercise(button.dataset.itemId);
      return;
    }
    if (action === "add-set") {
      addSetFromCard(button);
      return;
    }
    if (action === "remove-set") {
      removeSet(button.dataset.itemId, button.dataset.setId);
      return;
    }
    if (action === "timer-start") {
      startTimer(state.settings.restSeconds);
      return;
    }
    if (action === "timer-stop") {
      stopTimer();
      return;
    }
    if (action === "create-routine") {
      createRoutine();
      return;
    }
    if (action === "delete-routine") {
      deleteRoutine(button.dataset.routineId);
      return;
    }
    if (action === "edit-routine") {
      ui.editRoutineId = button.dataset.routineId;
      renderRoutines();
      return;
    }
    if (action === "add-routine-item") {
      addRoutineItem();
      return;
    }
    if (action === "remove-routine-item") {
      removeRoutineItem(button.dataset.routineId, button.dataset.itemId);
      return;
    }
    if (action === "move-routine-item-up") {
      moveRoutineItem(button.dataset.routineId, button.dataset.itemId, -1);
      return;
    }
    if (action === "move-routine-item-down") {
      moveRoutineItem(button.dataset.routineId, button.dataset.itemId, 1);
      return;
    }
    if (action === "share-routine") {
      shareRoutine(button.dataset.routineId);
      return;
    }
    if (action === "create-exercise") {
      createExercise();
      return;
    }
    if (action === "delete-exercise") {
      deleteExercise(button.dataset.exerciseId);
      return;
    }
    if (action === "export-csv") {
      exportCsv();
      return;
    }
    if (action === "export-json") {
      exportJson();
      return;
    }
    if (action === "calc-warmup") {
      calcWarmup();
      return;
    }
    if (action === "calc-plates") {
      calcPlates();
      return;
    }
    if (action === "share-workout") {
      shareWorkout();
    }
  });
}

function importJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      state = loadStateFromImport(parsed);
      saveState();
      renderAll();
      toast("Import complete");
    } catch (err) {
      toast("Invalid JSON");
    }
  };
  reader.readAsText(file);
}

function loadStateFromImport(parsed) {
  const merged = JSON.parse(JSON.stringify(DEFAULT_STATE));
  merged.settings = { ...merged.settings, ...(parsed.settings || {}) };
  merged.exercises = Array.isArray(parsed.exercises) && parsed.exercises.length ? parsed.exercises : SEED_EXERCISES;
  merged.routines = Array.isArray(parsed.routines) ? parsed.routines : [];
  merged.workouts = Array.isArray(parsed.workouts) ? parsed.workouts : [];
  merged.activeWorkoutId = parsed.activeWorkoutId || null;
  return merged;
}

function renderAll() {
  renderLog();
  renderRoutines();
  renderExercises();
  renderStats();
  renderTools();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js");
    });
  }
}

function setupInstallPrompt() {
  const btn = $("#installBtn");
  if (!btn) return;
  let deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    btn.classList.remove("hidden");
  });

  btn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    btn.classList.add("hidden");
  });
}

function init() {
  handleInputEvents();
  setView(ui.view);
  renderAll();
  renderTools();
  registerServiceWorker();
  setupInstallPrompt();
}

document.addEventListener("DOMContentLoaded", init);
