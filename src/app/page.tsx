"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, Play, X, Sparkles } from "lucide-react";

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
 const [menuOpen,setMenuOpen] = useState(false);
 const [activeVideo,setActiveVideo] = useState<Video|null>(null);
 const closeMenu=()=>setMenuOpen(false);
 return <main>
  <header className="site-header">
   <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">H<span>✳</span></span><span>THÂN NGỌC HUYÊN<span className="brand-dot">.</span><small>CREATIVE PORTFOLIO</small></span></a>
   <nav className={menuOpen?"nav open":"nav"} aria-label="Main navigation"><a href="#videos" onClick={closeMenu}>VIDEO CỦA TÔI</a><a href="#about" onClick={closeMenu}>GIỚI THIỆU</a><a href="#services" onClick={closeMenu}>KỸ NĂNG</a><a className="nav-contact" href="#contact" onClick={closeMenu}>LIÊN HỆ <ArrowUpRight size={15}/></a></nav>
   <button className="mobile-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?"Đóng menu":"Mở menu"}>{menuOpen?<X/>:<Menu/>}</button>
  </header>
  <section className="hero container" id="top">
    <div className="hero-meta"><span><span className="online-dot"/> AVAILABLE FOR CREATIVE PROJECTS</span><span>HANOI, VIETNAM · 2026</span></div>
    <div className="hero-title"><h1>DESIGN<span className="hero-star">✳</span><br/><em>IN MOTION.</em></h1><div className="hero-side"><span className="circle-plus">↗</span><p>Biến ý tưởng thành hình ảnh.<br/>Biến khoảnh khắc thành câu chuyện.</p></div></div>
    <div className="hero-bottom"><p>GRAPHIC DESIGNER <span>+</span> VIDEO EDITOR</p><a href="#videos" className="round-arrow" aria-label="Xem video"><ArrowDownRight size={27}/></a></div>
    <div className="hero-line"/>
  </section>
  <section className="intro container"><div className="eyebrow"><span className="tiny-cross">✳</span> A LITTLE ABOUT ME</div><p>Xin chào, mình là một <strong>Graphic Designer & Video Editor</strong> yêu thích những ý tưởng táo bạo, typography chỉn chu và cách hình ảnh kể chuyện.</p><a href="#about" className="text-link">KHÁM PHÁ THÊM <ArrowUpRight size={17}/></a></section>
  <section id="videos" className="video-section container"><div className="section-heading"><div><div className="eyebrow">01 / REAL VIDEO EDITING WORK</div><h2>VIDEO <em>ĐÃ THỰC HIỆN</em><span className="asterisk">✳</span></h2></div><p>7 video trong portfolio.<br/>Nhấn vào để phát trực tiếp.</p></div><div className="video-grid">{videos.map(v=><button key={v.id} type="button" className="video-card" onClick={()=>setActiveVideo(v)}><div className={"video-cover "+v.orientation}><img src={v.thumbnail} alt={"Ảnh đại diện "+v.title} loading="lazy"/><span className="video-play"><Play fill="currentColor" size={24}/></span><span className="video-duration">{v.duration}</span></div><div className="video-caption"><div><span>VIDEO EDITING · {v.orientation.toUpperCase()}</span><h3>{v.title}</h3><p>{v.label}</p></div><ArrowUpRight size={20}/></div></button>)}</div><p className="project-note">Đây là các video bạn đã cung cấp. Bản xem trực tuyến được nén để tải nhanh hơn; giữ file gốc để dùng cho showreel chất lượng cao.</p></section>
  <section id="about" className="about"><div className="container about-inner"><div><div className="eyebrow light">02 / THE CREATOR</div><h2>THIẾT KẾ <br/>LÀ CÁCH <br/><em>TÔI KỂ CHUYỆN.</em></h2><div className="about-deco">✳</div></div><div className="about-copy"><div className="portrait-art portrait-photo"><img src="/images/than-ngoc-huyen.jpg" alt="Thân Ngọc Huyên ngắm cảnh núi" className="portrait-image" /><span className="portrait-sub">THÂN NGỌC HUYÊN / CREATIVE PORTFOLIO</span></div><p>Mình tập trung vào nhận diện thương hiệu, thiết kế đồ hoạ và biên tập video. Mỗi dự án là cơ hội để thử một góc nhìn mới, giữ tính thẩm mỹ và truyền tải thông điệp rõ ràng.</p><a className="light-link" href="#contact">LÀM VIỆC CÙNG MÌNH <ArrowUpRight size={17}/></a></div></div></section>
  <section className="services container" id="services"><div className="section-heading"><div><div className="eyebrow">03 / WHAT I DO</div><h2>KỸ NĂNG <em>& DỊCH VỤ</em></h2></div><Sparkles size={38} strokeWidth={1.3}/></div><div className="service-list">
   <div className="service"><span>01</span><div><h3>Graphic Design</h3><p>Poster · Key Visual · Social Media · Typography</p></div><ArrowUpRight/></div>
   <div className="service"><span>02</span><div><h3>Brand Identity</h3><p>Logo · Hệ thống nhận diện · Bao bì · Mockup</p></div><ArrowUpRight/></div>
   <div className="service"><span>03</span><div><h3>Video Editing</h3><p>Adobe Premiere Pro · Storytelling · Color · Sound</p></div><ArrowUpRight/></div>
  </div><div className="tools"><span>MY CREATIVE TOOLKIT</span><div><span>Ps</span><span>Ai</span><span>Pr</span><span>Ae</span><span>Figma</span></div></div></section>
  <footer className="footer" id="contact"><div className="container"><div className="eyebrow light">04 / HAVE A PROJECT IN MIND?</div><div className="footer-title">LET'S MAKE<br/><em>IT HAPPEN.</em><span>↗</span></div><p>Đang có một ý tưởng hay? Hãy cùng tạo ra điều gì đó đáng nhớ.</p><div className="contact-methods"><a className="email-button" href="mailto:hthan9158@gmail.com">HTHAN9158@GMAIL.COM <ArrowUpRight size={18}/></a><a className="phone-button" href="tel:+84383231372">0383 231 372 <ArrowUpRight size={18}/></a></div><div className="footer-bottom"><span>© 2026 THÂN NGỌC HUYÊN. ALL RIGHTS RESERVED.</span><div><a href="https://www.behance.net/" target="_blank" rel="noreferrer">BEHANCE ↗</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href="#top">BACK TO TOP ↑</a></div></div></div></footer>
  {activeVideo && <div className="modal-overlay video-modal-overlay" onClick={()=>setActiveVideo(null)} role="presentation"><div className="video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title} onClick={e=>e.stopPropagation()}><div className="video-modal-header"><div><span>SELECTED VIDEO / 2026</span><h3>{activeVideo.title}</h3></div><button aria-label="Đóng video" onClick={()=>setActiveVideo(null)}><X size={25}/></button></div><video key={activeVideo.id} src={activeVideo.src} poster={activeVideo.thumbnail} autoPlay controls playsInline preload="metadata"/><div className="video-modal-bottom"><span>{activeVideo.label}</span><a href={activeVideo.src} target="_blank" rel="noreferrer">MỞ VIDEO <ArrowUpRight size={16}/></a></div></div></div>}

 </main>;
}
