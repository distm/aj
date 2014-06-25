window.Langs = {
    blog:                           "Blog",
    company:                        "Perusahaan",
    date_join:                      "Tanggal Daftar",
    detail:                         "Detail",
    industry:                       "Industri",
    name:                           "Nama",
    phone:                          "Telepon",
    reg_name:                       "Nama Registran",
    reg_email:                      "Email Registran",
    seeker:                         "Seeker",
    show_jobs:                      "Lowongan",
    statistic:                      "Statistik",
    status:                         "Status"
};

window.lang = function(line){
    return Langs.hasOwnProperty(line) ? Langs[line] : "~"+ line;
};
