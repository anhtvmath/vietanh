const database = [
    {
    title: "CHƯƠNG I: HÀM SỐ",
        topics: [
        {
        title: "Chủ đề 1.1: Sự biến thiên của hàm số",
        subtopics: [
        { 
            title: "Cho bảng biến thiên", 
            variants: [
                {method: ["SBT_BBT_NB_hambacbaCTC","SBT_BBT_DB_hambacbaCTC","SBT_BBT_DB_hambacbaTCT","SBT_BBT_NB_hambacbaTCT"], params: "ex", name: "Dạng 1: Sự biến thiên của hàm bậc ba"},
                {method: ["SBT_BBT_NB_hamtrungphuongCTCT", "SBT_BBT_DB_hamtrungphuongCTCT", "SBT_BBT_NB_hamtrungphuongTCTC", "SBT_BBT_DB_hamtrungphuongTCTC"], params: "ex", name: "Dạng 2: Sự biến thiên của hàm trùng phương"}
            ] 
        },
        { 
            title: "Cho đồ thị hàm số", 
            variants: [
                {method: ["SBT_DT_hambacbaTCT", "SBT_DT_hambacbaCTC"], params: "ex", name: "Dạng 1: Cho đồ thị của hàm bậc ba"},
                {method: ["SBT_DT_hamtrungphuongCTCT", "SBT_DT_hamtrungphuongTCTC"], params: "ex", name: "Dạng 2: Cho đồ thị của hàm trùng phương"}
            ] 
        },
        { 
            title: "Cho hàm số", 
            variants: [
                {method: ["SBT_CHO_HS_DB_hambacbaCTC", "SBT_CHO_HS_NB_hambacbaCTC", "SBT_CHO_HS_DB_hambacbaTCT", "SBT_CHO_HS_NB_hambacbaTCT"], params: "ex", name: "Dạng 1: Sự biến thiên của hàm bậc ba"}, 
                {method: ["SBT_CHO_HS_NB_hamtrungphuongCTCT", "SBT_CHO_HS_DB_hamtrungphuongCTCT", "SBT_CHO_HS_NB_hamtrungphuongTCTC", "SBT_CHO_HS_DB_hamtrungphuongTCTC"], params: "ex", name: "Dạng 2: Sự biến thiên của hàm trùng phương"}
            ] 
        },
        { 
            title: "Cho đạo hàm", 
            variants: [
                {method: ["SBT_CHO_DAOHAM_hambacba_1", "SBT_CHO_DAOHAM_hambacba_2", "SBT_CHO_DAOHAM_hambacba_3", "SBT_CHO_DAOHAM_hambacba_4"], params: "ex", name: "Dạng 1: Sự biến thiên của hàm bậc ba"}
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
                {method: ["CUCTRI_BBT_hamtrungphuongCTCT"], params: "ex", name: "Dạng 1: Cực trị của hàm trùng phương"}
            ] 
        },
        { 
            title: "Cho đồ thị hàm số", 
            variants: [
                {method: ["CUCTRI_DOTHI_hambacbaTCT", "CUCTRI_DOTHI_hambacbaCTC"], params: "ex", name: "Dạng 1: Cực trị của hàm bậc ba"}
            ] 
        },
        { 
            title: "Cho hàm số", 
            variants: [
                {method: ["CUCTRI_CHO_HS_hambacbaCTC", "CUCTRI_CHO_HS_hambacbaTCT"], params: "ex", name: "Dạng 1: Cực trị của hàm bậc ba"},
                {method: ["CUCTRI_CHO_HS_hamtrungphuongCTCT"], params: "ex", name: "Dạng 2: Cực trị của hàm trùng phương"}
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
        title: "Chủ đề 1.4: Trắc nghiệm đúng sai",
        subtopics: [
        { 
            title: "Cho bảng biến thiên", 
            variants: [
                {method: ["TF_SBT_BBT_hambacbaCTC", "TF_SBT_BBT_hambacbaTCT"], params: "ex", name: "Dạng 1: Hàm bậc ba"}
            ] 
        }
        ]
        }
        ]
    },
    {
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
        title: "Chủ đề 4.1:...",
        subtopics: [
        { 
            title: "Mục 4.1.1", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        },
        { 
            title: "Mục 4.1.2", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 4.2:...",
        subtopics: [
        { 
            title: "Mục 4.2.1", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        },
        { 
            title: "Mục 4.2.2", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
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
        title: "Chủ đề 5.1:...",
        subtopics: [
        { 
            title: "Mục 5.1.1", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        },
        { 
            title: "Mục 5.1.2", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 5.2:...",
        subtopics: [
        { 
            title: "Mục 5.2.1", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        },
        { 
            title: "Mục 5.2.2", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
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
        title: "Chủ đề 6.1:...",
        subtopics: [
        { 
            title: "Mục 6.1.1", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        },
        { 
            title: "Mục 6.1.2", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        }
        ]
        },
        {
        title: "Chủ đề 6.2:...",
        subtopics: [
        { 
            title: "Mục 6.2.1", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        },
        { 
            title: "Mục 6.2.2", 
            variants: [
                {method: "secapnhat", params: "ex", name: "Dạng 1:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 2:..." },
                {method: "secapnhat", params: "ex", name: "Dạng 3:..." }
            ] 
        }
        ]
        }
        ]
    }
    ];
