window.Langs = {
    address:                        "Alamat",
    blog:                           "Blog",
    company:                        "Perusahaan",
    country:                        "Country",
    city:                           "Kota",
    date_join:                      "Tanggal Daftar",
    description:                    "Deskripsi",
    detail:                         "Detail",
    email:                          "Email",
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
    status:                         "Status"
};

window.lang = function(line){
    return Langs.hasOwnProperty(line) ? Langs[line] : "~"+ line;
};
