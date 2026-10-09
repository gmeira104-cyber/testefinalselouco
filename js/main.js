/* ============ CONFIGURAÇÃO — EDITE AQUI ============ */
const WHATSAPP_NUMBER = "5515992893005"; // ex.: 5515999999999
const INSTAGRAM_URL = "https://www.instagram.com/seloucoitapea01/";
const HERO_IMAGE = "";   // URL da foto de campanha
const ABOUT_TEXT = "A SELOUCO é uma marca de camisetas oversized pensada para quem leva anime, treino e cultura de rua para o dia a dia. Conforto de verdade, presença forte e atitude em cada peça.";
// Mensagem do WhatsApp por produto. {produto} = nome do produto, {preco} = preço. Tamanho/cor escolhidos são acrescentados ao final.
const MSG_PRODUTO = "Olá! Tenho interesse na {produto} da SELOUCO, no valor de {preco}. Gostaria de saber mais sobre tamanhos e disponibilidade.";
const MSG_GERAL = "Olá! Vim pelo site da SELOUCO e gostaria de saber mais sobre as camisetas.";
// Categorias dos filtros (adicione novas aqui; "category" do produto deve ser um destes ids)
const categories = [
  {id:"todos",label:"Todos"},{id:"camisetas",label:"Camisetas"},{id:"feminino",label:"Feminino"},{id:"regatas",label:"Regatas"}
];
// Tamanhos exibidos como opções gerais (edite aqui para todos os produtos, ou por produto abaixo)
const SIZES = ["P","M","G","GG"];
// PRODUTOS — price em reais (119.9 = R$ 119,90). images: caminhos locais (1ª = principal). colors: [] se não informada.
// description: deixe "" para não exibir. available: omita para "consulte pelo WhatsApp"; true/false para marcar.
const products = [
  {id:1,name:"Camiseta Sakura",category:"feminino",price:119.9,description:"",images:["assets/img/produtos/sakura-preta-01.jpeg"],sizes:SIZES,colors:["Preta"]},
  {id:2,name:"Camiseta Mitsuri Kanroji",category:"feminino",price:119.9,description:"",images:["assets/img/produtos/mitsuri-kanroji-marrom-01.jpeg","assets/img/produtos/mitsuri-kanroji-marrom-02.jpeg"],sizes:SIZES,colors:["Marrom"]},
  {id:3,name:"Camiseta Maki Zenin",category:"feminino",price:119.9,description:"",images:["assets/img/produtos/maki-zenin-off-white-01.jpeg"],sizes:SIZES,colors:["Off white"]},
  {id:4,name:"Camiseta Sininho",category:"feminino",price:119.9,description:"",images:["assets/img/produtos/sininho-preta-01.jpeg"],sizes:SIZES,colors:["Preta"]},
  {id:5,name:"Camiseta Luffy",category:"camisetas",price:119.9,description:"",images:["assets/img/produtos/luffy-branca-01.jpeg"],sizes:SIZES,colors:["Branca"]},
  {id:6,name:"Camiseta Goku",category:"camisetas",price:119.9,description:"",images:["assets/img/produtos/goku-preta-01.jpeg"],sizes:SIZES,colors:["Preta"]},
  {id:7,name:"Camiseta Sung Jinwoo",category:"camisetas",price:119.9,description:"",images:["assets/img/produtos/sung-jinwoo-branca-01.jpeg"],sizes:SIZES,colors:["Branca"]},
  {id:8,name:"Camiseta Ryomen Sukuna",category:"camisetas",price:119.9,description:"",images:["assets/img/produtos/sukuna-01.jpeg"],sizes:SIZES,colors:[]},
  {id:9,name:"Camiseta SELOUCO",category:"camisetas",price:119.9,description:"",images:["assets/img/produtos/selouco-01.jpeg"],sizes:SIZES,colors:[]},
  {id:10,name:"Camiseta SELOUCO — Modelo 2",category:"camisetas",price:119.9,description:"",images:["assets/img/produtos/selouco-modelo-2-01.jpeg"],sizes:SIZES,colors:[]},
  {id:11,name:"Camiseta Baki Hanma",category:"camisetas",price:119.9,description:"",images:["assets/img/produtos/baki-hanma-01.jpeg"],sizes:SIZES,colors:[]},
  {id:12,name:"Regata Machão Luffy",category:"regatas",price:89.9,description:"",images:["assets/img/produtos/regata-machao-luffy-preta-01.jpeg"],sizes:SIZES,colors:["Preta"]},
  {id:13,name:"Regata Machão Tanjiro Kamado",category:"regatas",price:89.9,description:"",images:["assets/img/produtos/regata-machao-tanjiro-kamado-branca-01.jpeg"],sizes:SIZES,colors:["Branca"]}
];
/* ===================================================== */

const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const money=p=>p==null||p===0?'<small>Preço a definir</small>':'R$ '+Number(p).toFixed(2).replace('.',',');
const priceTxt=p=>'R$ '+Number(p.price).toFixed(2).replace('.',',');
const msg=(p,sz='',co='')=>MSG_PRODUTO.replace('{produto}',p.name).replace('{preco}',priceTxt(p))+(sz?` Tamanho: ${sz}.`:'')+(co?` Cor: ${co}.`:'');
const wa=t=>`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t)}`;
const img=(p,i=0,cls='')=>p.images[i]?`<img src="${esc(p.images[i])}" alt="${esc(p.name)} SELOUCO — frente e costas" loading="lazy">`:`<div class="ph ${cls}" role="img" aria-label="Foto de ${esc(p.name)}"><em>Foto ${i+1} aqui</em></div>`;

const hp=()=>$('#pre').classList.add('h');addEventListener('load',()=>setTimeout(hp,350));setTimeout(hp,2500);
/* WhatsApp geral + drop */
$$('.wa').forEach(a=>{a.href=wa(MSG_GERAL);a.target='_blank';a.rel='noopener'});
$('#dropbtn').href=INSTAGRAM_URL;
$('#abt').textContent=ABOUT_TEXT;$('#yr').textContent=new Date().getFullYear();
if(HERO_IMAGE){const h=$('#heroimg');h.className='';h.innerHTML=`<img src="${esc(HERO_IMAGE)}" alt="Pessoa usando camiseta oversized SELOUCO" style="width:100%;height:100%;object-fit:cover">`;h.style.cssText='position:absolute;inset:0'}

/* header / menu */
const hd=$('#hd'),nv=$('#nv'),bg=$('#bg');
const sc=()=>hd.classList.toggle('s',scrollY>40);addEventListener('scroll',sc,{passive:true});sc();
const tog=o=>{nv.classList.toggle('o',o);bg.classList.toggle('o',o);bg.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
bg.onclick=()=>tog(!nv.classList.contains('o'));
$$('nav a').forEach(a=>a.addEventListener('click',()=>tog(false)));

/* catálogo */
let cat='todos',term='';
$('#fl').innerHTML=categories.map(c=>`<button data-c="${c.id}" class="${c.id===cat?'a':''}">${esc(c.label)}</button>`).join('');
$('#fl').onclick=e=>{const b=e.target.closest('button');if(!b)return;cat=b.dataset.c;$$('#fl button').forEach(x=>x.classList.toggle('a',x===b));render()};
$('#q').oninput=e=>{term=e.target.value.trim().toLowerCase();render()};
function render(){
  const c=categories.find(x=>x.id===cat);
  const list=products.filter(p=>(cat==='todos'||(c.flag?p[c.flag]:p.category===cat))&&(!term||(p.name+' '+p.category+' '+p.description).toLowerCase().includes(term)));
  $('#gr').innerHTML=list.length?list.map(p=>`<article class="card rv v">
    <div class="im" data-id="${p.id}">${p.drop01?'<span class="bd">DROP 01</span>':''}${img(p)}</div>
    <div class="ci"><span class="cat">${esc(categories.find(x=>x.id===p.category)?.label||p.category)}</span>
    <h3>${esc(p.name)}</h3><div class="pr">${money(p.price)}</div><div class="pixc">5% OFF no PIX</div>
    <div class="sz">${p.sizes.map(s=>`<span>${esc(s)}</span>`).join('')}</div>
    <div class="ca"><button class="btn" data-id="${p.id}">Ver produto</button><a class="btn r" target="_blank" rel="noopener" href="${wa(msg(p))}">Comprar</a></div></div></article>`).join(''):'<p class="empty">Nenhuma camiseta encontrada.</p>';
}
$('#gr').onclick=e=>{const t=e.target.closest('[data-id]');if(t&&!t.matches('a'))openP(+t.dataset.id)};

/* modal do produto */
const mo=$('#mo'),mc=$('#mc');
function openP(id){
  const p=products.find(x=>x.id===id);if(!p)return;let sz='',co='';
  const n=p.images.length;
  mc.innerHTML=`<div><div class="main" id="mm">${img(p,0)}</div>${n>1?`<div class="th">${Array.from({length:n},(_,i)=>`<button data-i="${i}" aria-label="Foto ${i+1}">${img(p,i)}</button>`).join('')}</div>`:''}</div>
  <div><span class="cat">${esc(categories.find(x=>x.id===p.category)?.label||'')}${p.drop01?' · DROP 01':''}</span>
  <h2>${esc(p.name)}</h2><div class="pr" style="font-size:22px">${money(p.price)}</div><div class="pixc" style="margin-top:6px">5% OFF no PIX · Cartão de crédito em até 6x</div>
  ${p.description?`<p style="color:#bbb">${esc(p.description)}</p>`:''}
  <div class="lb">Tamanhos</div><div class="opt" id="os">${p.sizes.map(s=>`<button>${esc(s)}</button>`).join('')}</div>
  ${p.colors.length?`<div class="lb">Cores</div><div class="opt" id="oc">${p.colors.map(s=>`<button>${esc(s)}</button>`).join('')}</div>`:''}
  <div class="lb">Disponibilidade</div><div class="${p.available?'av':''}">${p.available===true?'● Disponível':p.available===false?'Indisponível no momento — consulte pelo WhatsApp':'Consulte a disponibilidade pelo WhatsApp'}</div>
  <a class="btn r" id="mb" target="_blank" rel="noopener">Comprar pelo WhatsApp</a><p class="paynote">Pagamento via PIX com 5% OFF ou cartão de crédito em até 6x.</p></div>`;
  const upd=()=>{$('#mb').href=wa(msg(p,sz,co))};upd();
  const pick=(id,set)=>{const g=$(id);if(g)g.onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('button',g).forEach(x=>x.classList.toggle('a',x===b));set(b.textContent);upd()}};
  pick('#os',v=>sz=v);pick('#oc',v=>co=v);
  const th=$('.th',mc);if(th)th.onclick=e=>{const b=e.target.closest('button');if(b)$('#mm').innerHTML=img(p,+b.dataset.i)};
  mo.classList.add('o');document.body.style.overflow='hidden';mo.scrollTop=0;
}
const closeP=()=>{mo.classList.remove('o');document.body.style.overflow=''};
$('#mx').onclick=closeP;addEventListener('keydown',e=>{if(e.key==='Escape'){closeP();tog(false)}});

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(el=>io.observe(el));
render();
