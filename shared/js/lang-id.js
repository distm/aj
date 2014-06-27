window.Langs = {
    active:                         "Aktif",
    address:                        "Alamat",
    blog:                           "Blog",
    company:                        "Perusahaan",
    content:                        "Isi",
    country:                        "Country",
    city:                           "Kota",
    date:                           "Tanggal",
    date_join:                      "Tanggal Daftar",
    date_create:                    "Tanggal Dibuat",
    description:                    "Deskripsi",
    detail:                         "Detail",
    email:                          "Email",
    inactive:                       "Tidak Aktif",
    industry:                       "Industri",
    info:                           "Info",
    name:                           "Nama",
    phone:                          "Telepon",
    registrant:                     "Registran",
    reg_name:                       "Nama Registran",
    reg_email:                      "Email Registran",
    seeker:                         "Seeker",
    show_jobs:                      "Lowongan",
    statistic:                      "Statistik",
    status:                         "Status",
    summary:                        "Ringkasan",
    tags:                           "Kata Kunci",
    title:                          "Judul",
    view_count:                     "Dibaca",
    views:                          "kali",
    
    btn_cancel:                     "Batal",
    btn_close:                      "Tutup",
    btn_create_new_blog:            "Buat Blog Baru",
    btn_delete:                     "Hapus",
    btn_edit:                       "Edit",
    btn_submit:                     "Submit",
    btn_ok:                         "Oke"
};

window.lang = function(line){
    return Langs.hasOwnProperty(line) ? Langs[line] : "~"+ line;
};
