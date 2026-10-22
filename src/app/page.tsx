"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Film, Menu, Play, X, Instagram, Mail, MoveUpRight, Sparkles } from "lucide-react";

type Category = "Tất cả" | "Graphic Design" | "Video Editing";
type Project = { id:string; number:string; title:string; kind:Exclude<Category,"Tất cả">; subtitle:string; year:string; visual:string; eyebrow:string; symbol:string; size?:string; };
const projects: Project[] = [
  { id:"01",number:"01",title:"AN NAM",kind:"Graphic Design",subtitle:"Brand Identity · Barber Shop",year:"2026",visual:"an-nam",eyebrow:"BRAND IDENTITY",symbol:"AN",size:"large"},
  { id:"02",number:"02",title:"FRAME / 01",kind:"Video Editing",subtitle:"Cinematic Edit · Showreel",year:"2026",visual:"frame",eyebrow:"VIDEO EDITING",symbol:"▶"},
  { id:"03",number:"03",title:"HƯƠNG CỐM",kind:"Graphic Design",subtitle:"Packaging · Visual Identity",year:"2026",visual:"com",eyebrow:"PACKAGING DESIGN",symbol:"CỐM"},
  { id:"04",number:"04",title:"SA SA",kind:"Graphic Design",subtitle:"Packaging · Campaign",year:"2026",visual:"sasa",eyebrow:"CAMPAIGN / PACKAGING",symbol:"SA!"},
  { id:"05",number:"05",title:"MOTION STUDIES",kind:"Video Editing",subtitle:"Cuts · Rhythm · Typography",year:"2026",visual:"motion",eyebrow:"MOTION / EDITING",symbol:"PLAY"},
  { id:"06",number:"06",title:"WANDERGO",kind:"Graphic Design",subtitle:"Branding · Product Design",year:"2026",visual:"wander",eyebrow:"PRODUCT BRANDING",symbol:"W."},
];


type Video = { id: string; title: string; label: string; src: string; thumbnail: string; duration: string; orientation: "vertical"|"horizontal" };
const videos: Video[] = [
 {id:"v1",title:"DRAMA / 01",label:"Video Editing · Storytelling",src:"/videos/drama-01.mp4",thumbnail:"/thumbs/drama-01.jpg",duration:"01:22",orientation:"vertical"},
 {id:"v2",title:"DRAMA / 02",label:"Video Editing · Storytelling",src:"/videos/drama-02.mp4",thumbnail:"/thumbs/drama-02.jpg",duration:"01:17",orientation:"vertical"},
 {id:"v3",title:"MÀU SẮC",label:"Video Editing · Color",src:"/videos/mau-sac.mp4",thumbnail:"/thumbs/mau-sac.jpg",duration:"00:33",orientation:"horizontal"},
 {id:"v4",title:"SSD",label:"Video Editing · Content",src:"/videos/ssd.mp4",thumbnail:"/thumbs/ssd.jpg",duration:"01:01",orientation:"horizontal"},
 {id:"v5",title:"TIKTOK TIN",label:"Short-form · Social Video",src:"/videos/tiktok-tin.mp4",thumbnail:"/thumbs/tiktok-tin.jpg",duration:"00:38",orientation:"vertical"},
 {id:"v6",title:"TML",label:"Video Editing · Documentary Content",src:"/videos/tml.mp4",thumbnail:"/thumbs/tml.jpg",duration:"03:59",orientation:"vertical"},
 {id:"v7",title:"VIDEO POST / 01",label:"Short-form · Social Media",src:"/videos/video-post-01.mp4",thumbnail:"/thumbs/video-post-01.jpg",duration:"00:43",orientation:"vertical"},
];

export default function Home() {
 const [filter,setFilter] = useState<Category>("Tất cả");
 const [menuOpen,setMenuOpen] = useState(false);
 const [active,setActive] = useState<Project|null>(null);
 const [activeVideo,setActiveVideo] = useState<Video|null>(null);
 const shown = projects.filter(p=>filter==="Tất cả"||p.kind===filter);
 const closeMenu=()=>setMenuOpen(false);
 return <main>
  <header className="site-header">
   <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">H<span>✳</span></span><span>THÂN NGỌC HUYÊN<span className="brand-dot">.</span><small>CREATIVE PORTFOLIO</small></span></a>
   <nav className={menuOpen?"nav open":"nav"} aria-label="Main navigation"><a href="#work" onClick={closeMenu}>DỰ ÁN</a><a href="#videos" onClick={closeMenu}>VIDEO</a><a href="#about" onClick={closeMenu}>GIỚI THIỆU</a><a href="#services" onClick={closeMenu}>KỸ NĂNG</a><a className="nav-contact" href="#contact" onClick={closeMenu}>LIÊN HỆ <ArrowUpRight size={15}/></a></nav>
   <button className="mobile-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?"Đóng menu":"Mở menu"}>{menuOpen?<X/>:<Menu/>}</button>
  </header>
  <section className="hero container" id="top">
    <div className="hero-meta"><span><span className="online-dot"/> AVAILABLE FOR CREATIVE PROJECTS</span><span>HANOI, VIETNAM · 2026</span></div>
    <div className="hero-title"><h1>DESIGN<span className="hero-star">✳</span><br/><em>IN MOTION.</em></h1><div className="hero-side"><span className="circle-plus">↗</span><p>Biến ý tưởng thành hình ảnh.<br/>Biến khoảnh khắc thành câu chuyện.</p></div></div>
    <div className="hero-bottom"><p>GRAPHIC DESIGNER <span>+</span> VIDEO EDITOR</p><a href="#work" className="round-arrow" aria-label="Xem dự án"><ArrowDownRight size={27}/></a></div>
    <div className="hero-line"/>
  </section>
  <section className="intro container"><div className="eyebrow"><span className="tiny-cross">✳</span> A LITTLE ABOUT ME</div><p>Xin chào, mình là một <strong>Graphic Designer & Video Editor</strong> yêu thích những ý tưởng táo bạo, typography chỉn chu và cách hình ảnh kể chuyện.</p><a href="#about" className="text-link">KHÁM PHÁ THÊM <ArrowUpRight size={17}/></a></section>
  <section className="work container" id="work"><div className="section-heading"><div><div className="eyebrow">01 / SELECTED WORK</div><h2>DỰ ÁN <em>NỔI BẬT</em><span className="asterisk">✳</span></h2></div><p>Những thử nghiệm sáng tạo<br/>từ ý tưởng đến thành phẩm.</p></div>
  <div className="filters">{(["Tất cả","Graphic Design","Video Editing"] as Category[]).map(v=><button key={v} className={filter===v?"filter active":"filter"} onClick={()=>setFilter(v)}>{v}<span>{v==="Tất cả"?projects.length:projects.filter(p=>p.kind===v).length}</span></button>)}</div>
  <div className="project-grid">{shown.map(p=><button key={p.id} className="project-card" onClick={()=>setActive(p)} aria-label={"Xem "+p.title}><div className={"project-art "+p.visual}><div className="art-top"><span>{p.eyebrow}</span><span>© 2026</span></div><div className="art-symbol">{p.symbol}</div><div className="art-bottom"><span>DESIGN WITH INTENTION</span><span className="art-icon"><ArrowUpRight size={23}/></span></div></div><div className="project-caption"><div><div className="project-kind">{p.kind} / {p.number}</div><h3>{p.title}</h3><p>{p.subtitle}</p></div><span className="project-year">{p.year} <ArrowUpRight size={17}/></span></div></button>)}</div>
  <p className="project-note">Các hình ảnh đang là minh hoạ concept. Có thể thay bằng poster, mockup và video dự án thật của bạn.</p>
  </section>
  <section id="videos" className="video-section container"><div className="section-heading"><div><div className="eyebrow">02 / REAL VIDEO EDITING WORK</div><h2>VIDEO <em>ĐÃ THỰC HIỆN</em><span className="asterisk">✳</span></h2></div><p>7 video trong portfolio.<br/>Nhấn vào để phát trực tiếp.</p></div><div className="video-grid">{videos.map(v=><button key={v.id} type="button" className="video-card" onClick={()=>setActiveVideo(v)}><div className={"video-cover "+v.orientation}><img src={v.thumbnail} alt={"Ảnh đại diện "+v.title} loading="lazy"/><span className="video-play"><Play fill="currentColor" size={24}/></span><span className="video-duration">{v.duration}</span></div><div className="video-caption"><div><span>VIDEO EDITING · {v.orientation.toUpperCase()}</span><h3>{v.title}</h3><p>{v.label}</p></div><ArrowUpRight size={20}/></div></button>)}</div><p className="project-note">Đây là các video bạn đã cung cấp. Bản xem trực tuyến được nén để tải nhanh hơn; giữ file gốc để dùng cho showreel chất lượng cao.</p></section>
  <section id="about" className="about"><div className="container about-inner"><div><div className="eyebrow light">03 / THE CREATOR</div><h2>THIẾT KẾ <br/>LÀ CÁCH <br/><em>TÔI KỂ CHUYỆN.</em></h2><div className="about-deco">✳</div></div><div className="about-copy"><div className="portrait-art"><span>CREATE<br/>MORE<span className="orange-dot">.</span></span><span className="portrait-sub">DESIGN / EDIT / REPEAT</span></div><p>Mình tập trung vào nhận diện thương hiệu, thiết kế đồ hoạ và biên tập video. Mỗi dự án là cơ hội để thử một góc nhìn mới, giữ tính thẩm mỹ và truyền tải thông điệp rõ ràng.</p><a className="light-link" href="#contact">LÀM VIỆC CÙNG MÌNH <ArrowUpRight size={17}/></a></div></div></section>
  <section className="services container" id="services"><div className="section-heading"><div><div className="eyebrow">04 / WHAT I DO</div><h2>KỸ NĂNG <em>& DỊCH VỤ</em></h2></div><Sparkles size={38} strokeWidth={1.3}/></div><div className="service-list">
   <div className="service"><span>01</span><div><h3>Graphic Design</h3><p>Poster · Key Visual · Social Media · Typography</p></div><ArrowUpRight/></div>
   <div className="service"><span>02</span><div><h3>Brand Identity</h3><p>Logo · Hệ thống nhận diện · Bao bì · Mockup</p></div><ArrowUpRight/></div>
   <div className="service"><span>03</span><div><h3>Video Editing</h3><p>Adobe Premiere Pro · Storytelling · Color · Sound</p></div><ArrowUpRight/></div>
  </div><div className="tools"><span>MY CREATIVE TOOLKIT</span><div><span>Ps</span><span>Ai</span><span>Pr</span><span>Ae</span><span>Figma</span></div></div></section>
  <footer className="footer" id="contact"><div className="container"><div className="eyebrow light">05 / HAVE A PROJECT IN MIND?</div><div className="footer-title">LET'S MAKE<br/><em>IT HAPPEN.</em><span>↗</span></div><p>Đang có một ý tưởng hay? Hãy cùng tạo ra điều gì đó đáng nhớ.</p><a className="email-button" href="mailto:your-email@example.com">GỬI EMAIL CHO MÌNH <ArrowUpRight size={18}/></a><div className="footer-bottom"><span>© 2026 THÂN NGỌC HUYÊN. ALL RIGHTS RESERVED.</span><div><a href="https://www.behance.net/" target="_blank" rel="noreferrer">BEHANCE ↗</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href="#top">BACK TO TOP ↑</a></div></div></div></footer>
  {activeVideo && <div className="modal-overlay video-modal-overlay" onClick={()=>setActiveVideo(null)} role="presentation"><div className="video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title} onClick={e=>e.stopPropagation()}><div className="video-modal-header"><div><span>SELECTED VIDEO / 2026</span><h3>{activeVideo.title}</h3></div><button aria-label="Đóng video" onClick={()=>setActiveVideo(null)}><X size={25}/></button></div><video key={activeVideo.id} src={activeVideo.src} poster={activeVideo.thumbnail} autoPlay controls playsInline preload="metadata"/><div className="video-modal-bottom"><span>{activeVideo.label}</span><a href={activeVideo.src} target="_blank" rel="noreferrer">MỞ VIDEO <ArrowUpRight size={16}/></a></div></div></div>}
  {active && <div className="modal-overlay" onClick={()=>setActive(null)} role="presentation"><div className="modal" role="dialog" aria-modal="true" aria-label={active.title} onClick={e=>e.stopPropagation()}><button className="modal-close" aria-label="Đóng" onClick={()=>setActive(null)}><X/></button><div className={"modal-art project-art "+active.visual}><div className="art-top"><span>{active.eyebrow}</span><span>© 2026</span></div><div className="art-symbol">{active.symbol}</div></div><div className="modal-info"><div className="eyebrow">{active.kind} / {active.year}</div><h2>{active.title}</h2><p>{active.subtitle}. Đây là concept minh hoạ cho cấu trúc portfolio. Bạn có thể thay bằng hình ảnh dự án thật, video embed và phần mô tả quy trình sáng tạo.</p><a href="mailto:your-email@example.com?subject=Hoi%20ve%20du%20an" className="text-link">LIÊN HỆ VỀ DỰ ÁN <ArrowUpRight size={17}/></a></div></div></div>}
 </main>;
}
