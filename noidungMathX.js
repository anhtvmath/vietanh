const database = [
        {
        title: "Chủ đề 1.1: Sự biến thiên của hàm số",
        subtopics: [
        {
          title: "Cho bảng biến thiên", 
          variants: [
                {method: ["SBT_BBT_NB_hambacbaCTC"], params: "ex", name: "Dạng 1: Sự nghịch biến của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["SBT_BBT_DB_hambacbaCTC"], params: "ex", name: "Dạng 2: Sự đồng biến của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["SBT_BBT_NB_hambacbaTCT"], params: "ex", name: "Dạng 3: Sự nghịch biến của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["SBT_BBT_DB_hambacbaTCT"], params: "ex", name: "Dạng 4: Sự đồng biến của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["SBT_BBT_NB_hamtrungphuongCTCT"], params: "ex", name: "Dạng 5: Sự nghịch biến của hàm trùng phương với dấu đạo hàm + - + -"},
                {method: ["SBT_BBT_DB_hamtrungphuongCTCT"], params: "ex", name: "Dạng 6: Sự đồng biến của hàm trùng phương với dấu đạo hàm + - + -"},
                {method: ["SBT_BBT_NB_hamtrungphuongTCTC"], params: "ex", name: "Dạng 7: Sự nghịch biến của hàm trùng phương với dấu đạo hàm - + - +"},
                {method: ["SBT_BBT_DB_hamtrungphuongTCTC"], params: "ex", name: "Dạng 8: Sự đồng biến của hàm trùng phương với dấu đạo hàm - + - +"}
            ] 
        },
        { 
          title: "Cho đồ thị hàm số", 
          variants: [
              {method: ["SBT_DT_hambacbaCTC"], params: "ex", name: "Dạng 1: Cho đồ thị của hàm bậc ba với dấu đạo hàm + - +"},
              {method: ["SBT_DT_hambacbaTCT"], params: "ex", name: "Dạng 2: Cho đồ thị của hàm bậc ba với dấu đạo hàm - + -"},
              {method: ["SBT_DT_hamtrungphuongCTCT"], params: "ex", name: "Dạng 3: Cho đồ thị của hàm trùng phương với dấu đạo hàm + - + -"},
              {method: ["SBT_DT_hamtrungphuongTCTC"], params: "ex", name: "Dạng 4: Cho đồ thị của hàm trùng phương với dấu đạo hàm - + - +"}
          ] 
        },
        { 
          title: "Cho hàm số", 
          variants: [
              {method: ["SBT_CHO_HS_DB_hambacbaCTC"], params: "ex", name: "Dạng 1: Khoảng đồng biến của hàm bậc ba với dấu đạo hàm + - +"},
              {method: ["SBT_CHO_HS_NB_hambacbaCTC"], params: "ex", name: "Dạng 2: Khoảng nghịch biến của hàm bậc ba với dấu đạo hàm + - +"},
              {method: ["SBT_CHO_HS_DB_hambacbaTCT"], params: "ex", name: "Dạng 3: Khoảng đồng biến của hàm bậc ba với dấu đạo hàm - + -"},
              {method: ["SBT_CHO_HS_NB_hambacbaTCT"], params: "ex", name: "Dạng 4: Khoảng nghịch biến của hàm bậc ba với dấu đạo hàm - + -"},
              {method: ["SBT_CHO_HS_NB_hamtrungphuongCTCT"], params: "ex", name: "Dạng 5: Khoảng nghịch biến của hàm trùng phương với dấu đạo hàm + - + -"},
              {method: ["SBT_CHO_HS_DB_hamtrungphuongCTCT"], params: "ex", name: "Dạng 6: Khoảng đồng biến của hàm trùng phương với dấu đạo hàm + - + -"},
              {method: ["SBT_CHO_HS_NB_hamtrungphuongTCTC"], params: "ex", name: "Dạng 7: Khoảng nghịch biến của hàm trùng phương với dấu đạo hàm - + - +"},
              {method: ["SBT_CHO_HS_DB_hamtrungphuongTCTC"], params: "ex", name: "Dạng 8: Khoảng đồng biến của hàm trùng phương với dấu đạo hàm - + - +"}
          ] 
        },
        { 
          title: "Cho đạo hàm", 
          variants: [
              {method: ["SBT_CHO_DAOHAM_hambacba_1"], params: "ex", name: "Dạng 1: Cho đạo hàm của hàm bậc ba"},
              {method: ["SBT_CHO_DAOHAM_hambacba_2"], params: "ex", name: "Dạng 2: Cho đạo hàm của hàm bậc ba"},
              {method: ["SBT_CHO_DAOHAM_hambacba_3"], params: "ex", name: "Dạng 3: Cho đạo hàm của hàm bậc ba"},
              {method: ["SBT_CHO_DAOHAM_hambacba_4"], params: "ex", name: "Dạng 4: Cho đạo hàm của hàm bậc ba"}
          ] 
        }
        ]
        },
        {
        title: "Chủ đề 1.2: Cực trị của hàm số",
        subtopics: [
        { 
            title: "Cho bảng biến thiên", 
            variants: [
                {method: ["CUCTRI_BBT_hambacbaCTC_yCD"], params: "ex", name: "Dạng 1: Giá trị cực đại của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_BBT_hambacbaCTC_yCT"], params: "ex", name: "Dạng 2: Giá trị cực tiểu của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_BBT_hambacbaCTC_xCD"], params: "ex", name: "Dạng 3: Điểm cực đại của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_BBT_hambacbaCTC_xCT"], params: "ex", name: "Dạng 4: Điểm cực tiểu của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_BBT_hambacbaTCT_yCD"], params: "ex", name: "Dạng 5: Giá trị cực đại của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["CUCTRI_BBT_hambacbaTCT_yCT"], params: "ex", name: "Dạng 6: Giá trị cực tiểu của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["CUCTRI_BBT_hambacbaTCT_xCD"], params: "ex", name: "Dạng 7: Điểm cực đại của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["CUCTRI_BBT_hambacbaTCT_xCT"], params: "ex", name: "Dạng 8: Điểm cực tiểu của hàm bậc ba với dấu đạo hàm - + -"}
            ] 
        },
        { 
            title: "Cho đồ thị hàm số", 
            variants: [
                {method: ["CUCTRI_DOTHI_hambacbaCTC_yCD"], params: "ex", name: "Dạng 1: Giá trị cực đại của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_DOTHI_hambacbaCTC_yCT"], params: "ex", name: "Dạng 2: Giá trị cực tiểu của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_DOTHI_hambacbaCTC_xCD"], params: "ex", name: "Dạng 3: Điểm cực đại của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_DOTHI_hambacbaCTC_xCT"], params: "ex", name: "Dạng 4: Điểm cực tiểu của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_DOTHI_hambacbaTCT_yCD"], params: "ex", name: "Dạng 5: Giá trị cực đại của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["CUCTRI_DOTHI_hambacbaTCT_yCT"], params: "ex", name: "Dạng 6: Giá trị cực tiểu của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["CUCTRI_DOTHI_hambacbaTCT_xCD"], params: "ex", name: "Dạng 7: Điểm cực đại của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["CUCTRI_DOTHI_hambacbaTCT_xCT"], params: "ex", name: "Dạng 8: Điểm cực tiểu của hàm bậc ba với dấu đạo hàm - + -"}
            ] 
        },
        { 
            title: "Cho hàm số", 
            variants: [
                {method: ["CUCTRI_CHO_HS_hambacbaCTC_yCD"], params: "ex", name: "Dạng 1: Giá trị cực đại của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_CHO_HS_hambacbaCTC_yCT"], params: "ex", name: "Dạng 2: Giá trị cực tiểu của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_CHO_HS_hambacbaCTC_xCD"], params: "ex", name: "Dạng 3: Điểm cực đại của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_CHO_HS_hambacbaCTC_xCT"], params: "ex", name: "Dạng 4: Điểm cực tiểu của hàm bậc ba với dấu đạo hàm + - +"},
                {method: ["CUCTRI_CHO_HS_hambacbaTCT_yCD"], params: "ex", name: "Dạng 5: Giá trị cực đại của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["CUCTRI_CHO_HS_hambacbaTCT_yCT"], params: "ex", name: "Dạng 6: Giá trị cực tiểu của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["CUCTRI_CHO_HS_hambacbaTCT_xCD"], params: "ex", name: "Dạng 7: Điểm cực đại của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["CUCTRI_CHO_HS_hambacbaTCT_xCT"], params: "ex", name: "Dạng 8: Điểm cực tiểu của hàm bậc ba với dấu đạo hàm - + -"},
                {method: ["CUCTRI_CHO_HS_hamtrungphuongCTCT"], params: "ex", name: "Dạng 9: Cực trị của hàm trùng phương"}
            ] 
        },
        { 
            title: "Cho đạo hàm", 
            variants: [
                {method: ["CUCTRI_CHO_DAOHAM_SODIEMCUCTRI_hamsobacba1", "CUCTRI_CHO_DAOHAM_SODIEMCUCTRI_hamsobacba2", "CUCTRI_CHO_DAOHAM_SODIEMCUCTRI_hamsobacba3"], params: "ex", name: "Dạng 1: Số điểm cực trị của hàm bậc ba"}
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 1.3: Tìm hàm số",
        subtopics: [
        { 
            title: "Cho bảng biến thiên", 
            variants: [
                {method: ["secapnhat"], params: "ex", name: "Dạng 1: Hàm bậc ba"},
                {method: ["secapnhat"], params: "ex", name: "Dạng 2: Hàm trùng phương"}
            ] 
        },
        { 
            title: "Cho đồ thị hàm số", 
            variants: [
                {method: ["TIM_HAM_SO_BIET_DOTHI_hambacbaTCT", "TIM_HAM_SO_BIET_DOTHI_hambacbaCTC"], params: "ex", name: "Dạng 1: Hàm bậc ba"},
                {method: ["secapnhat"], params: "ex", name: "Dạng 2: Hàm trùng phương"}
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 1.4: Tìm tiệm cận",
        subtopics: [
        { 
            title: "Hàm số $y=\\dfrac{ax+b}{cx+d}$", 
            variants: [
                {method: ["TCĐ_hamphanthucTT"], params: "ex", name: "Dạng 1: Tìm tiệm cận đứng của đồ thị hàm số với $y'<0$"},
                {method: ["TCĐ_hamphanthucCC"], params: "ex", name: "Dạng 2: Tìm tiệm cận đứng của đồ thị hàm số với $y'>0$"},
                {method: ["TCN_hamphanthucTT"], params: "ex", name: "Dạng 3: Tìm tiệm cận ngang của đồ thị hàm số với $y'<0$"},
                {method: ["TCN_hamphanthucCC"], params: "ex", name: "Dạng 4: Tìm tiệm cận ngang của đồ thị hàm số với $y'>0$"},
                {method: ["secapnhat"], params: "ex", name: "Dạng 2: Hàm trùng phương"}
            ] 
        },
        { 
            title: "Hàm số $y=\\dfrac{ax^2+bx+c}{px+q}$",
            variants: [
                {method: ["secapnhat"], params: "ex", name: "Dạng 1: Hàm bậc ba"},
                {method: ["secapnhat"], params: "ex", name: "Dạng 2: Hàm trùng phương"}
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 1.5: Trắc nghiệm đúng sai",
        subtopics: [
        { 
            title: "Cho bảng biến thiên", 
            variants: [
                {method: ["TF_SBT_BBT_hambacbaCTC", "TF_SBT_BBT_hambacbaTCT", "TF_CHO_HS_hambacbaCTC"], params: "ex", name: "Dạng 1: Hàm bậc ba"}
            ] 
        },
        { 
            title: "Cho đồ thị", 
            variants: [
                {method: ["TF_SBT_DT_hambacbaCTC", "TF_SBT_DT_hambacbaTCT"], params: "ex", name: "Dạng 1: Hàm bậc ba"}
            ] 
        },
        { 
            title: "Cho hàm số", 
            variants: [
                {method: ["TF_CHO_HS_hambacbaCTC"], params: "ex", name: "Dạng 1: Hàm bậc ba"}
            ] 
        }
        ]
        }
        ]
    },
    title: "CHƯƠNG II: VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN",
        topics: [
        {
        title: "Chủ đề 2.1: Các phép toán vectơ",
        subtopics: [
        { 
            title: "Vectơ trong không gian", 
            variants: [
                {method: ["dodaivectoOxyz"], params: "ex", name: "Dạng 1: Độ dài vectơ"},
                {method: ["congvectoOxyz"], params: "ex", name: "Dạng 2: Tổng hai vectơ"},
                {method: ["truvectoOxyz"], params: "ex", name: "Dạng 3: Hiệu hai vectơ"},
                {method: ["congtruvectoOxyz1", "congtruvectoOxyz2", "congtruvectoOxyz3"], params: "ex", name: "Dạng 4: Tổng hiệu ba vectơ"},
                {method: ["tichvohuongOxyz"], params: "ex", name: "Dạng 5: Tích vô hướng hai vectơ" }
            ] 
        },
        { 
            title: "Trung điểm, trọng tâm", 
            variants: [
                {method: ["trungdiemOxyz"], params: "ex", name: "Dạng 1: Tìm toạ độ trung điểm"},
                {method: ["trongtamOxyz"], params: "ex", name: "Dạng 2: Tìm toạ độ trọng tâm"}
            ] 
        }
        ]
        }
        ]
    },
    {
    title: "CHƯƠNG III: MẪU SỐ LIỆU GHÉP NHÓM",
        topics: [
        {
        title: "Chủ đề 3.1: Khoảng biến thiên và khoảng tứ phân vị",
        subtopics: [
        { 
            title: "Khoảng biến thiên", 
            variants: [
                {method: "khoang_bien_thien", params: "ex", name: "Dạng 1: Tìm khoảng biến thiên" }
            ] 
        },
        { 
            title: "Khoảng tứ phân vị", 
            variants: [
                {method: ["Tim_Q1_vidu1", "Tim_Q1_vidu2", "Tim_Q1_vidu3", "Tim_Q1_vidu4", "Tim_Q1_vidu5", "Tim_Q1_vidu6"], params: "ex", name: "Dạng 1: Tìm tứ phân vị thứ nhất"},
                {method: ["Tim_Q2_vidu1", "Tim_Q2_vidu2", "Tim_Q2_vidu3", "Tim_Q2_vidu4", "Tim_Q2_vidu5", "Tim_Q2_vidu6"], params: "ex", name: "Dạng 2: Tìm tứ phân vị thứ hai"},
                {method: ["Tim_Q3_vidu1", "Tim_Q3_vidu2", "Tim_Q3_vidu3", "Tim_Q3_vidu4", "Tim_Q3_vidu5", "Tim_Q3_vidu6"], params: "ex", name: "Dạng 3: Tìm tứ phân vị thứ ba"}
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 3.2: Số trung bình, phương sai",
        subtopics: [
        { 
            title: "Số trung bình", 
            variants: [
                {method: ["Tim_trungbinh_vidu1", "Tim_trungbinh_vidu2", "Tim_trungbinh_vidu3", "Tim_trungbinh_vidu4", "Tim_trungbinh_vidu5", "Tim_trungbinh_vidu6"], params: "ex", name: "Dạng 1: Tìm số trung bình" }
            ] 
        },
        { 
            title: "Phương sai", 
            variants: [
                {method: ["Tim_phuongsai_vidu1", "Tim_phuongsai_vidu2", "Tim_phuongsai_vidu3", "Tim_phuongsai_vidu4", "Tim_phuongsai_vidu5", "Tim_phuongsai_vidu6"], params: "ex", name: "Dạng 1: Tìm phương sai" }
            ] 
        }
        ]
        }
        ]
    },
    {
    title: "CHƯƠNG IV: NGUYÊN HÀM VÀ TÍCH PHÂN",
        topics: [
        {
        title: "Chủ đề 4.1: Nguyên hàm",
        subtopics: [
        { 
            title: "Tìm họ nguyên hàm", 
            variants: [
                {method: "nguyenham1", params: "ex", name: "Dạng 1"},
                {method: "nguyenham2", params: "ex", name: "Dạng 2"},
                {method: "nguyenham3", params: "ex", name: "Dạng 3"},
                {method: "nguyenham4", params: "ex", name: "Dạng 4"}
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 4.2: Tích phân",
        subtopics: [
        { 
            title: "Tính chất của tích phân", 
            variants: [
                {method: ["tinhchattichphan1"], params: "ex", name: "Dạng 1"},
                {method: ["tinhchattichphan2"], params: "ex", name: "Dạng 2"},
                {method: ["tinhchattichphan3"], params: "ex", name: "Dạng 3"},
                {method: ["tinhchattichphan4"], params: "ex", name: "Dạng 4"},
                {method: ["tinhchattichphan5"], params: "ex", name: "Dạng 5"},
                {method: ["tinhchattichphan6"], params: "ex", name: "Dạng 6"},
                {method: ["tinhchattichphan7"], params: "ex", name: "Dạng 7"}
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 4.3: Ứng dụng của tích phân",
        subtopics: [
        { 
            title: "Ứng dụng vật lý của tích phân", 
            variants: [
                {method: "ungdungtichphan1", params: "ex", name: "Dạng 1" },
                {method: "ungdungtichphan2", params: "ex", name: "Dạng 2" },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        },
        { 
            title: "Ứng dụng hình học của tích phân", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." }
            ] 
        }
        ]
        }
        ]
    },
    {
    title: "CHƯƠNG V: PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN",
        topics: [
        {
        title: "Chủ đề 5.1: Phương trình mặt phẳng",
        subtopics: [
        { 
            title: "Vectơ pháp tuyến của mặt phẳng", 
            variants: [
                {method: ["timvectophaptuyen_mp"], params: "ex", name: "Dạng 1: Tìm vectơ pháp tuyến của mặt phẳng"}
            ] 
        },
        { 
            title: "Viết phương trình mặt phẳng", 
            variants: [
                {method: ["phuongtrinhmp_diquadiem_phaptuyen"], params: "ex", name: "Dạng 1: Đi qua một điểm và biết vectơ pháp tuyến"},
                {method: ["phuongtrinhmp_diquadiem_songsongmp"], params: "ex", name: "Dạng 2: Đi qua một điểm và song song với mặt phẳng cho trước"}
            ] 
        },
        { 
            title: "Tính khoảng cách từ một điểm đến một mặt phẳng", 
            variants: [
                {method: ["khoangcachdenmatphang"], params: "ex", name: "Dạng 1: Tính khoảng cách từ một điểm đến một mặt phẳng"}
            ] 
        },
        ]
        },
        {
        title: "Chủ đề 5.2: Phương trình đường thẳng",
        subtopics: [
        { 
            title: "Mục 5.2.1", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 5.3: Phương trình mặt cầu",
        subtopics: [
        { 
            title: "Mục 5.3.1", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 5.4: Công thức tính góc trong không gian",
        subtopics: [
        { 
            title: "Mục 5.4.1", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 5.5: Trắc nghiệm đúng sai",
        subtopics: [
        { 
            title: "Mục 5.5.1", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." }
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 5.6: Trắc nghiệm điền khuyết",
        subtopics: [
        { 
            title: "Một số bài tập", 
            variants: [
                {method: ["secapnhat"], params: "ex", name: "Dạng 1"}
            ] 
        }
        ]
        }
        ]
    },
    {
    title: "CHƯƠNG VI: XÁC SUẤT CÓ ĐIỀU KIỆN",
        topics: [
        {
        title: "Chủ đề 6.1: Xác suất có điều kiện",
        subtopics: [
        { 
            title: "Xác suất có điều kiện", 
            variants: [
                {method: ["xs_vidu1", "xs_vidu2"], params: "ex", name: "Dạng 1"},
                {method: ["xs_vidu3", "xs_vidu4"], params: "ex", name: "Dạng 2"},
                {method: ["xs_vidu7"], params: "ex", name: "Dạng 3"},
                {method: ["xs_vidu14"], params: "ex", name: "Dạng 4"}
            ] 
        },
        { 
            title: "Công thức nhân xác suất", 
            variants: [
                {method: ["xs_vidu5", "xs_vidu6"], params: "ex", name: "Dạng 1"},
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 6.2: Công thức xác suất toàn phần và công thức Bayes",
        subtopics: [
        { 
            title: "Công thức xác suất toàn phần", 
            variants: [
                {method: ["xs_vidu10"], params: "ex", name: "Dạng 1"},
                {method: ["xs_vidu11"], params: "ex", name: "Dạng 2"},
                {method: ["xs_vidu13"], params: "ex", name: "Dạng 3"},
                {method: ["xs_vidu15"], params: "ex", name: "Dạng 4"}
            ] 
        },
        { 
            title: "Công thức Bayes", 
            variants: [
                {method: ["xs_vidu8"], params: "ex", name: "Dạng 1"},
                {method: ["xs_vidu9"], params: "ex", name: "Dạng 2"},
                {method: ["xs_vidu12"], params: "ex", name: "Dạng 3"}
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 6.3: Trắc nghiệm đúng sai",
        subtopics: [
        { 
            title: "Xác suất có điều kiện", 
            variants: [
                {method: ["TF_vidu1"], params: "ex", name: "Dạng 1"},
                {method: ["TF_vidu2"], params: "ex", name: "Dạng 2"},
                {method: ["TF_vidu4"], params: "ex", name: "Dạng 3"}
            ] 
        },
        { 
            title: "Công thức xác suất toàn phần và công thức Bayes", 
            variants: [
                {method: ["TF_vidu3"], params: "ex", name: "Dạng 1"},
                {method: ["TF_vidu5"], params: "ex", name: "Dạng 2"},
                {method: ["TF_vidu6"], params: "ex", name: "Dạng 3"},
                {method: ["TF_vidu7"], params: "ex", name: "Dạng 4"}
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 6.3: Trắc nghiệm điền khuyết",
        subtopics: [
        { 
            title: "Một số bài tập", 
            variants: [
                {method: ["secapnhat"], params: "ex", name: "Dạng 1"}
            ] 
        }
        ]
        }
        ]
    }
    ];
