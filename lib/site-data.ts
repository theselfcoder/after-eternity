export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
}

export const PROJECTS: Project[] = [
  { id: 'C1lZGTM8EXI', title: 'Songs of Devotion', category: 'Documentary', description: 'A cinematic journey exploring atmosphere and mood. Color graded to emphasize cold, detached tones.' },
  { id: '4XNWfiGA2UQ', title: "A Woman's Body", category: 'Trailer', description: 'Official trailer cut for emotional impact. Color graded to heighten intimacy, tension, and cinematic depth.' },
  { id: 'YeCCpnvODYs', title: 'Nocturne-X', category: 'Narrative', description: 'A nocturnal study in shadow and light. Moody grading that leans into deep blacks and cold, restrained highlights.' },
  { id: 'zoGDj-Qg6z8', title: 'Redmi Note 11', category: 'Commercial', description: 'A sleek product commercial with crisp, punchy visuals. Precision editing and vibrant grading built for the brand.' },
  { id: 'j_tPmW51E7I', title: 'Lok Virsa Commercial', category: 'Event', description: 'High-energy visuals with dynamic cutting. Precision editing that matches the beat of the city.' },
  { id: 'VMfBFnEB1a4', title: "Bee One's Honey", category: 'Commercial', description: 'Capturing the raw texture of reality. Naturalistic color grading combined with immersive sound design.' },
  { id: '2T7XoTcIkQU', title: 'Apple Commercial', category: 'Product', description: 'A showcase of technical precision. Fast-paced, engaging, and visually striking imagery.' }
];

export const ICONS: Record<string, string> = {
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  sparkles:
    '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
  lightbulb:
    '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  layers:
    '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
  moon: '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
  sliders:
    '<path d="M10 8h4"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M17 16h4"/><path d="M19 12V3"/><path d="M19 21v-5"/><path d="M3 14h4"/><path d="M5 10V3"/><path d="M5 21v-7"/>',
  wand: '<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/>',
  film: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  video: '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  ear: '<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  volume:
    '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>',
  settings:
    '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  tv: '<path d="m17 2-5 5-5-5"/><rect width="20" height="15" x="2" y="7" rx="2"/>',
  palette:
    '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',
  scissors: '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>'
};

export interface CategoryMeta {
  label: string;
  desc: string;
  icon: string;
}

export const CATEGORY_META: Record<string, CategoryMeta> = {
  Coloring: { label: 'Coloring & Grading', desc: 'Skin tones, exposure, relighting & emulation', icon: 'palette' },
  Editing: { label: 'Editing & Pacing', desc: 'Story timeline structure & transitions', icon: 'scissors' },
  'Film Sound Design': { label: 'Sound Design', desc: 'Dialogues, Foley & immersive stereo', icon: 'volume' },
  'Full Post-Production': { label: 'Full Post-Production', desc: 'Conforming, mastering, QC & DCP exports', icon: 'tv' }
};

export interface FaqEntry {
  id: string;
  category: string;
  question: string;
  icon: string;
  answer: string;
}

export const FAQ_DATA: FaqEntry[] = [
  { id: 'skin-tone', category: 'Coloring', question: 'Skin Tone Control in Different Scenes', icon: 'user', answer: "Skin tones are the emotional anchor of any film. Whether shooting under harsh midday sun, cold fluorescent office lights, or stylized neon, we isolate skin tones using custom 3D qualifiers and HSL curves. This ensures that while the background carries a heavy stylistic color grade (like a rich teal or warm amber), skin tones remain natural, healthy, and emotionally honest, preserving the actor's performance under any lighting condition." },
  { id: 'exposure-balancing', category: 'Coloring', question: 'Exposure Balancing (Preventing Blown Highlights)', icon: 'sun', answer: "Blown highlights ruin the organic feel of digital footage, giving it a cheap 'video' look. By utilizing HDR grading zones and precise waveform monitoring, we balance exposure across the frame. We bring down overly bright sky details, hot window light, or specular reflections on skin, seating them naturally within the camera's dynamic range while maintaining proper midtone contrast." },
  { id: 'highlight-recovery', category: 'Coloring', question: 'Highlight Recovery & Reconstruction', icon: 'sparkles', answer: 'When highlights appear clipped on the timeline, there is often hidden detail buried in the raw camera data. Using manufacturer-specific raw controls (like RED, ARRI, Blackmagic, or Sony RAW) and advanced recovery algorithms, we reconstruct detail in clipped skies, clouds, or light fixtures. This process restores organic texture and roll-off, transforming a harsh digital clip into a gentle, pleasing highlight roll-off reminiscent of classic celluloid.' },
  { id: 'relight', category: 'Coloring', question: 'Relight (Virtual Lighting in Post)', icon: 'lightbulb', answer: "Missed a key light on set? Want to add a subtle glow to an actor's face, or create moody shafts-of-light in a dark alley? Our advanced spatial relighting tools allow us to place virtual 3D light sources inside a 2D frame. By tracking the scene's movement, we can direct light to emphasize specific subjects, guide the viewer's eye, and sculpt three-dimensional depth that wasn't there on the day of filming." },
  { id: 'depth-map', category: 'Coloring', question: 'Depth Map and its Incredible Uses', icon: 'layers', answer: 'A Depth Map is an incredibly powerful AI-assisted tool that calculates the relative distance of every object in the frame from the camera lens, generating a clean 3D depth mask. Using this mask, we can isolate the background to add atmospheric haze, mimic expensive anamorphic lens defocus (bokeh), selectively desaturate or color-grade distant objects, or add volumetric light rays behind a subject—all without tedious manual rotoscoping.' },
  { id: 'shadow-recovery', category: 'Coloring', question: 'Shadow Recovery & Clean Pedestals', icon: 'moon', answer: "Deep, rich shadows give a film its cinematic weight, but muddy or noisy shadows distract the viewer. We gently pull details out of underexposed areas without washing out the blacks. By setting a clean, solid 'pedestal' (the absolute black point), we ensure your shadows are deep, rich, and completely noise-free, maintaining excellent contrast ratio and preserving the mysterious or moody elements of your scene." },
  { id: 'noise-reduction', category: 'Coloring', question: 'Noise Reduction (Temporal & Spatial)', icon: 'sliders', answer: 'Low-light shooting often introduces digital chroma (color) and luma (brightness) noise, making footage look grainy in an unpleasing, synthetic way. We apply highly precise, dual-stage noise reduction: temporal noise reduction (comparing adjacent frames to eliminate random noise while preserving sharp motion details) and spatial noise reduction (cleaning up persistent patterns within a single frame). This results in exceptionally clean, high-production-value master files.' },
  { id: 'blemish-removal', category: 'Coloring', question: 'Blemish Removal & Digital Makeup', icon: 'wand', answer: "Maintaining a flawless aesthetic shouldn't require heavy physical makeup on set. Through state-of-the-art beauty work and planar object-tracking, we perform subtle blemish removal, skin softening, eye sharpening, and dental brightening. The key is subtlety—our digital makeup tracks the natural contours of the face perfectly, keeping pores and natural texture intact so the correction remains completely invisible to the audience." },
  { id: 'film-look', category: 'Coloring', question: 'The Film Look (Celluloid Emulation)', icon: 'film', answer: 'Modern digital cameras are incredibly clinical and sharp. To achieve a timeless cinematic look, we emulate the organic characteristics of specific celluloid film stocks (like Kodak Vision3 or Fujifilm Eterna). This includes modeling the non-linear color response, natural halation (the red glow around high-contrast edges), gate weave, and subtler tonal curves that give film its coveted nostalgic, emotional quality.' },
  { id: 'grain', category: 'Coloring', question: 'Organic Film Grain Integration', icon: 'sparkles', answer: 'Digital noise is ugly, but film grain is beautiful. We map real, scanned 35mm, 16mm, or 8mm celluloid grain over the digital image. Unlike generic overlays, our grain is applied dynamically according to the luminosity of the frame—meaning it lives naturally in the midtones and recedes in the deepest shadows and brightest highlights, just like real silver halide crystals on film.' },

  { id: 'narrative-pacing', category: 'Editing', question: 'Narrative Pacing & Story Rhythm', icon: 'zap', answer: "Pacing is the heartbeat of cinema. We study raw footage to determine the precise frame to cut, ensuring action and dialogue have room to breathe, establishing tension, or driving energy depending on the scene's emotional weight." },
  { id: 'workflow-stages', category: 'Editing', question: 'Rough Cut vs. Fine Cut Workflow', icon: 'video', answer: 'We begin with a loose Assembly to establish sequence, followed by a Rough Cut focusing on story flow, and finally a Fine Cut to lock down exact frame selections, pacing, and visual continuity.' },
  { id: 'multi-cam', category: 'Editing', question: 'Organizing Selects and Multi-Cam Synchronization', icon: 'layers', answer: 'For massive projects, we organize footage with strict metadata tagging, color-coding, and rating. Multi-camera sequences are synchronized via timecode or waveform audio for fluid switching.' },
  { id: 'transitions', category: 'Editing', question: 'Seamless Transitions & Invisible Cuts', icon: 'sliders', answer: 'We specialize in invisible cuts—using match cuts on action, directional whips, or lighting shifts to transport the audience seamlessly from one scene to the next without breaking immersion.' },

  { id: 'dialogue-cleanup', category: 'Film Sound Design', question: 'Dialogue Cleanup & Noise Extraction', icon: 'ear', answer: "On-set audio can contain generator hum, wind rumble, or clothing rustle. Using spectral repair tools, we target and surgically remove unwanted sounds without degrading the actor's vocal quality." },
  { id: 'custom-foley', category: 'Film Sound Design', question: 'Custom Foley & Atmospheric Soundscapes', icon: 'music', answer: 'To bring a world to life, we layer custom-designed environmental soundscapes and Foley effects—adding footsteps, fabric rustle, door creaks, and wind textures to establish a physical sense of space.' },
  { id: 'room-tone', category: 'Film Sound Design', question: 'Room Tone Matching across Cuts', icon: 'sliders', answer: 'When cross-cutting between different takes, the background noise can shift abruptly. We capture and loop room tones to weave a continuous acoustic thread under the dialogue, keeping cuts completely unnoticeable.' },
  { id: 'panning-immersion', category: 'Film Sound Design', question: 'Spatial Audio & Immersive Panning', icon: 'volume', answer: "We place sound elements dynamically across the stereo or surround field. A passing car sweeps from left to right, and distant voices sit precisely in the back corner, matching the camera's perspective." },

  { id: 'conform-process', category: 'Full Post-Production', question: 'The Conform Process (Online vs. Offline)', icon: 'settings', answer: "Editing is done with low-resolution proxy files for optimal system performance. During 'conforming', we swap the proxies back to the camera's original raw files, ensuring every pixel is pristine for color grading." },
  { id: 'master-deliverables', category: 'Full Post-Production', question: 'Master Deliverables & Archival Preparation', icon: 'film', answer: 'We compile pristine masters for theatrical projection, web streaming, or television broadcast. We deliver standard ProRes files alongside deep archival packages designed to survive decades.' },
  { id: 'dcp-creation', category: 'Full Post-Production', question: 'Digital Cinema Package (DCP) Creation', icon: 'tv', answer: 'To project a film in commercial theaters, it must be converted into a strict theatrical format called a DCP. We encode, test, and format your movie to meet theater projection system standards globally.' },
  { id: 'qc-standards', category: 'Full Post-Production', question: 'Quality Control (QC) & Broadcast Standards', icon: 'shield', answer: 'We run every project through rigorous technical analysis, checking for hot pixels, audio peaks, subtitle synchronization, flash frames, and phase errors to ensure instant platform approval.' }
];