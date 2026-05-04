  const inputArea = document.getElementById('input');
  const previewArea = document.getElementById('preview');
  const resizer = document.getElementById('resizer');
  const leftPane = document.getElementById('left-pane');

  function openTab(evt, tabName) {
      let toolbar = document.getElementsByClassName("toolbar");
      for (let i = 0; i < toolbar.length; i++) toolbar[i].classList.remove("active");
      let tablinks = document.getElementsByClassName("tab-btn");
      for (let i = 0; i < tablinks.length; i++) tablinks[i].classList.remove("active");
      document.getElementById(tabName).classList.add("active");
      evt.currentTarget.classList.add("active");
  }

  function insertAtCursor(text) {
      const start = inputArea.selectionStart;
      const end = inputArea.selectionEnd;
      inputArea.value = inputArea.value.substring(0, start) + text + inputArea.value.substring(end);
      inputArea.selectionStart = inputArea.selectionEnd = start + text.length;
      inputArea.focus();
      render();
  }

  function render() {
      let val = inputArea.value;
      if (!val.trim()) { previewArea.innerHTML = ""; return; }

      let finalHTML = val.replace(/\\begin\{tikzpicture\}([\s\S]*?)\\end\{tikzpicture\}/g, function(match) {
          let encoded = encodeURIComponent(match);
          return `<img src="https://i.upmath.me/svg/${encoded}" class="tikz-img">`;
      });

      previewArea.innerHTML = finalHTML;

      if (window.MathJax) {
          MathJax.typesetPromise([previewArea]);
      }
  }

  function copyCode() {
      navigator.clipboard.writeText(inputArea.value);
      const btn = document.getElementById('copyBtn');
      btn.innerText = "XONG!";
      setTimeout(() => btn.innerText = "COPY", 1000);
  }

function clearCode() {
    // 1. Xóa nội dung
    inputArea.value = ""; 
    render(); 

    // 2. Đưa con trỏ chuột quay lại textarea (focus)
    inputArea.focus();

    // 3. Hiệu ứng thông báo trên nút
    const clearBtn = document.getElementById('clearBtn');
    const originalText = clearBtn.innerText;
    clearBtn.innerText = "ĐÃ XÓA!";
    setTimeout(() => clearBtn.innerText = originalText, 1000);
}

  function xuatPDF() {
  const content = document.getElementById('preview').innerHTML;
  if (!content.trim()) {
      alert("Chưa có nội dung để xuất!");
      return;
  }

  const printWindow = window.open('', '_blank');
  
  printWindow.document.write(`
      <html>
          <head>
              <title>Tài liệu</title>
              <style>
                  @page { size: A4; margin: 0; }
                  body { 
                      background: white; margin: 0; padding: 0;
                      font-family: "Cambria", serif;
                  }
                  #print-container { padding: 20mm 15mm; }

                  /* 1. FONT CHỮ CHUẨN & XỬ LÝ XUỐNG DÒNG */
                  #preview { 
                      font-size: 14pt !important;
                      font-family: "Cambria", "Times New Roman", serif !important; 
                      line-height: 1.6 !important;
                      color: black;
                      /* Quan trọng nhất: Giữ nguyên định dạng xuống dòng */
                      white-space: pre-wrap !important; 
                      word-wrap: break-word;
                  }

                  /* 2. TOÁN TRONG DÒNG (Inline) */
                  mjx-container:not([display="true"]) {
                      display: inline-block !important;
                      font-size: 100% !important; 
                      vertical-align: baseline !important;
                      margin: 0 2px !important;
                      white-space: nowrap; /* Không cho ngắt dòng giữa công thức toán */
                  }

                  /* 3. BẢNG BIẾN THIÊN & TIKZ: Ép xuống dòng và căn giữa */
                  .tikz-img, 
                  mjx-container[display="true"] {
                      display: block !important;
                      margin: 20pt auto !important; 
                      text-align: center !important;
                      max-width: 100% !important;
                      white-space: normal !important; /* Trả về bình thường cho khối block */
                  }

                  /* Thu nhỏ SVG để chuyên nghiệp hơn */
                  mjx-container[display="true"] svg, .tikz-img {
                      width: auto !important;
                      max-width: 90% !important;
                      height: auto !important;
                      transform: scale(0.85);
                  }

                  header, .label-bar, button { display: none !important; }
              </style>
          </head>
          <body>
              <div id="print-container">
                  <div id="preview">${content}</div>
              </div>
              <script>
                  window.onload = () => {
                      // Chờ MathJax render xong (nếu cần) trước khi in
                      setTimeout(() => {
                          window.print();
                          window.close();
                      }, 800);
                  };
              <\/script>
          </body>
      </html>
  `);
  printWindow.document.close();
}

  let isResizing = false;
  resizer.addEventListener('mousedown', () => isResizing = true);
  document.addEventListener('mousemove', (e) => {
      if (!isResizing) return;
      let containerWidth = document.getElementById('container').offsetWidth;
      let newWidth = (e.clientX / containerWidth) * 100;
      if (newWidth > 15 && newWidth < 85) leftPane.style.width = newWidth + '%';
  });
  document.addEventListener('mouseup', () => isResizing = false);
  window.onload = () => { setTimeout(render, 500); };