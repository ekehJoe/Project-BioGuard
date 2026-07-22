css = """
/* ======================================================
   Project BioGuard
   FMD Reporting Wizard
   Enterprise Theme v0.2.0
====================================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    background:#f4f7f9;
    color:#222;
    line-height:1.5;
}

.container{
    max-width:1100px;
    margin:40px auto;
    background:#ffffff;
    border-radius:12px;
    box-shadow:0 8px 25px rgba(0,0,0,.10);
    padding:35px;
}

.page-header{
    display:flex;
    align-items:center;
    gap:20px;
    margin-bottom:35px;
    padding-bottom:20px;
    border-bottom:3px solid #0b8457;
}

.logo{
    width:90px;
}

.page-header h1{
    color:#0b8457;
    font-size:32px;
    margin-bottom:6px;
}

.page-header h2{
    color:#1565c0;
    font-size:22px;
    margin-bottom:8px;
}

.page-header p{
    color:#666;
}

.form-step{
    background:#ffffff;
    border:1px solid #dcdcdc;
    border-radius:10px;
    padding:25px;
    margin-bottom:30px;
}

.form-step h3{
    color:#0b8457;
    margin-bottom:20px;
}

.form-group{
    margin-bottom:18px;
}

label{
    display:block;
    margin-bottom:6px;
    font-weight:bold;
}

input:not([type="checkbox"]),
select,
textarea{
    width:100%;
    padding:12px;
    border:1px solid #cccccc;
    border-radius:8px;
    font-size:15px;
}

input:focus,
select:focus,
textarea:focus{
    outline:none;
    border-color:#1565c0;
    box-shadow:0 0 6px rgba(21,101,192,.30);
}

.checkbox-group{
    display:grid;
    grid-template-columns:1fr;
    gap:12px;
    margin-bottom:25px;
}

.checkbox-group label{
    display:inline-flex !important;
    align-items:center !important;
    justify-content:flex-start !important;
    gap:6px !important;
    width:auto !important;
    padding:8px 0 !important;
    margin:0 !important;
    font-weight:normal;
transition: background 0.2s ease;
}
.checkbox-group label:hover{
    background:#f3f9f3;
}
.checkbox-group label:active{
    background:#e8f5e9;
}
.checkbox-group input[type="checkbox"]{
    width:auto !important;
    height:auto !important;
    margin:0 !important;
    padding:0 !important;
    flex:none !important;
}
.checkbox-group input[type="checkbox"]{
    transform: scale(1.3);
    margin-right: 8px;
    cursor: pointer;
}
.navigation{
    display:flex;
    justify-content:space-between;
    margin-top:30px;
}

.navigation button{
    background:#1565c0;
    color:#ffffff;
    border:none;
    padding:12px 24px;
    border-radius:8px;
    cursor:pointer;
    font-size:15px;
    transition:.3s;
}

.navigation button:hover{
    background:#0b8457;
}

#submitBtn{
    background:#0b8457;
}

#submitBtn:hover{
    background:#086c47;
}

@media(max-width:768px){

.container{
    margin:15px;
    padding:20px;
}

.page-header{
    flex-direction:column;
    text-align:center;
}

.logo{
    width:70px;
}

.navigation{
    flex-direction:column;
    gap:12px;
}

.navigation button{
    width:100%;
}

}
"""
