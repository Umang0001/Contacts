"use strict";(self.webpackChunkContacts=self.webpackChunkContacts||[]).push([[456],{456:(F,_,s)=>{s.r(_),s.d(_,{ContactsModule:()=>U});var l=s(6895),u=s(9965),t=s(8256),f=s(6041),m=s(9526),C=s(529);let d=(()=>{class o{constructor(n){this._http=n}getPersonalData(n){return this._http.get(m.J+"/"+n)}updateUser(n,e){return this._http.put(m.J+"/"+n,JSON.stringify(e),{headers:{"content-type":"application/json "}})}deleteUser(n){return this._http.delete(m.J+"/"+n)}static#t=this.\u0275fac=function(e){return new(e||o)(t.LFG(C.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function x(o,r){if(1&o&&(t.TgZ(0,"div",1)(1,"h3"),t._uU(2,"Profile Details"),t.qZA(),t.TgZ(3,"table")(4,"tr")(5,"th"),t._uU(6,"Name "),t.TgZ(7,"span"),t._uU(8,":"),t.qZA()(),t.TgZ(9,"td"),t._uU(10),t.qZA()(),t.TgZ(11,"tr")(12,"th"),t._uU(13,"Phone "),t.TgZ(14,"span"),t._uU(15,":"),t.qZA()(),t.TgZ(16,"td"),t._uU(17),t.qZA()(),t.TgZ(18,"tr")(19,"th"),t._uU(20,"Date of birth "),t.TgZ(21,"span"),t._uU(22,":"),t.qZA()(),t.TgZ(23,"td"),t._uU(24),t.qZA()()()()),2&o){const n=t.oxw();t.xp6(10),t.Oqu(n.userDetails.name),t.xp6(7),t.Oqu(n.userDetails.phone),t.xp6(7),t.Oqu(n.userDetails.dob)}}let v=(()=>{class o{constructor(n){this._userService=n}ngOnInit(){let n=localStorage.getItem("userId");this._userService.getPersonalData(n).subscribe(e=>{this.userDetails=e})}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(d))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-profile"]],decls:1,vars:1,consts:[["class","wrapper",4,"ngIf"],[1,"wrapper"]],template:function(e,a){1&e&&t.YNc(0,x,25,3,"div",0),2&e&&t.Q6J("ngIf",a.userDetails)},dependencies:[l.O5],styles:[".wrapper[_ngcontent-%COMP%]{padding:30px 0 80px}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:5px 10px;text-transform:capitalize}th[_ngcontent-%COMP%]{display:flex;justify-content:space-between}th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:25px}h3[_ngcontent-%COMP%]{margin-bottom:20px;padding-left:10px}"]})}return o})();var i=s(433);let b=(()=>{class o{constructor(n,e,a,c){this._formBuilder=n,this._commonService=e,this._userService=a,this._elemRef=c,this.userContacts=new t.vpe,this.addContactForm=this._formBuilder.group({name:["",i.kI.required],phone:["",i.kI.required]})}ngAfterViewInit(){this._elemRef.nativeElement.querySelector(".name").focus()}handleAdd(){if(this.addContactForm.valid){let n=localStorage.getItem("userId");this._userService.getPersonalData(n).subscribe(e=>{if(e){let a=e.contacts||[];a.push(this.addContactForm.value),console.log({userContacts:a});let c={...e,contacts:a};this._userService.updateUser(n,c).subscribe(p=>{console.log(p),this.hideAddContact(),this.userContacts.emit(this.addContactForm.value)})}})}}hideAddContact(){this._commonService.showAddContact.next(!1)}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(f.v),t.Y36(d),t.Y36(t.SBq))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-contact"]],outputs:{userContacts:"userContacts"},decls:9,vars:2,consts:[[1,"aside",3,"click"],[1,"wrapper"],[3,"formGroup","ngSubmit"],["type","text","formControlName","name","placeholder","Enter name",1,"name"],["type","text","formControlName","phone","placeholder","Enter phone number"],[1,"btn","btn-sm","btn-primary",3,"disabled"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return a.hideAddContact()}),t.qZA(),t.TgZ(1,"div",1)(2,"h3"),t._uU(3,"Add Contact"),t.qZA(),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return a.handleAdd()}),t._UZ(5,"input",3)(6,"input",4),t.TgZ(7,"button",5),t._uU(8,"Add"),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",a.addContactForm),t.xp6(3),t.Q6J("disabled",!a.addContactForm.valid))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:20px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:center}.aside[_ngcontent-%COMP%]{position:fixed;height:100vh;width:100%;top:0%;left:0;background-color:#000;opacity:.5;z-index:99}.wrapper[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:30px;z-index:999;border-radius:8px}"]})}return o})();function O(o,r){1&o&&(t.TgZ(0,"div",3),t._UZ(1,"div",4)(2,"div",5)(3,"div",6),t.qZA())}const w=function(){return[1,2,3,4,1,2,3,4]};let P=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-contacts-shimmer"]],decls:3,vars:2,consts:[[1,"header"],[1,"wrapper"],["class","contact",4,"ngFor","ngForOf"],[1,"contact"],[1,"profile-img"],[1,"name"],[1,"phone"]],template:function(e,a){1&e&&(t._UZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,O,4,0,"div",2),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",t.DdM(1,w)))},dependencies:[l.sg],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;row-gap:20px}.wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{flex:0 0 23%;display:flex;flex-direction:column;align-items:center;justify-content:center;height:185px;border-radius:8px;padding-top:15px;border:9px solid #f3f3f3;animation:_ngcontent-%COMP%_mymove .5s infinite}@media (max-width: 767px){.wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{flex-basis:48%}}.wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{height:50px;width:50px;border-radius:50%;background-color:#f3f3f3;margin-bottom:20px}.wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{height:24px;background-color:#f3f3f3;width:80%;margin-bottom:20px}.header[_ngcontent-%COMP%]{width:100%;height:33px;margin-bottom:20px;background-color:#f3f3f3;animation:_ngcontent-%COMP%_mymove .5s infinite}@keyframes _ngcontent-%COMP%_mymove{0%{opacity:.5}50%{opacity:.8}to{opacity:1}}"]})}return o})();function M(o,r){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"app-add-contact",5),t.NdJ("userContacts",function(a){t.CHM(n);const c=t.oxw();return t.KtG(c.setContacts(a))}),t.qZA(),t.BQk()}}function y(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," No Favoutite Contacts "),t.qZA())}function Z(o,r){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",15),t._UZ(2,"div",16),t.TgZ(3,"div"),t._uU(4),t.qZA(),t.TgZ(5,"div"),t._uU(6),t.qZA(),t.TgZ(7,"div",17)(8,"button",18),t.NdJ("click",function(){const c=t.CHM(n).$implicit,p=t.oxw(2);return t.KtG(p.handleRemoveContact(null==c?null:c.name))}),t._uU(9,"Delete"),t.qZA(),t.TgZ(10,"input",19),t.NdJ("change",function(){const a=t.CHM(n),c=a.$implicit,p=a.index,g=t.oxw(2);return t.KtG(g.handleFavourite(null==c?null:c.name,p))}),t.qZA(),t.TgZ(11,"label",20),t._uU(12,"\u2665"),t.qZA()()(),t.BQk()}if(2&o){const n=r.$implicit,e=r.index;t.xp6(1),t.Q6J("ngClass",n.favourite?"favourite":""),t.xp6(3),t.Oqu(null==n?null:n.name),t.xp6(2),t.Oqu(null==n?null:n.phone),t.xp6(4),t.s9C("id","check-"+e),t.Q6J("checked",null==n?null:n.favourite),t.xp6(1),t.s9C("for","check-"+e)}}function T(o,r){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",6)(2,"h3"),t._uU(3,"Contacts List"),t.qZA(),t.TgZ(4,"div",7)(5,"label",8)(6,"span"),t._uU(7,"All Contacts"),t.qZA(),t.TgZ(8,"input",9),t.NdJ("change",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.handleContactsType("all"))}),t.qZA()(),t.TgZ(9,"label",10)(10,"span"),t._uU(11,"Favourites"),t.qZA(),t.TgZ(12,"input",11),t.NdJ("change",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.handleContactsType("favourite"))}),t.qZA()()()(),t.TgZ(13,"div",12),t.YNc(14,y,2,0,"div",0),t.YNc(15,Z,13,6,"ng-container",13),t.qZA(),t.TgZ(16,"button",14),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.handleAddContact())}),t._uU(17,"+"),t.qZA(),t.BQk()}if(2&o){const n=t.oxw();t.xp6(14),t.Q6J("ngIf",n.contacts.length<1),t.xp6(1),t.Q6J("ngForOf",n.contacts)}}function A(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",21)(1,"h5"),t._uU(2,"No contacts to show"),t.qZA(),t.TgZ(3,"button",22),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.showAddContactForm())}),t._uU(4,"Add Contact"),t.qZA()()}}function k(o,r){1&o&&t._UZ(0,"app-contacts-shimmer")}const q=[{path:"",component:(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:1,vars:0,template:function(e,a){1&e&&t._UZ(0,"router-outlet")},dependencies:[u.lC]})}return o})(),children:[{path:"",component:(()=>{class o{constructor(n,e,a){this._commonService=n,this._userService=e,this._elemRef=a,this.showAddContact=!1,this.loading=!0,this.userDetails={},this.contacts=[],this.allContacts=[]}ngOnInit(){console.log("init"),this._commonService.showAddContact.subscribe(e=>{this.showAddContact=e});let n=localStorage.getItem("userId");setTimeout(()=>{this._userService.getPersonalData(n).subscribe(e=>{this.contacts=e.contacts||[],this.allContacts=e.contacts||[],this.userDetails=e,this.loading=!1})},2e3)}setContacts(n){this.allContacts.push(n);let e=this._elemRef.nativeElement.querySelector('input[name="list-type"]:checked')?.value||"all";this.handleContactsType(e)}handleRemoveContact(n){let e=this.userDetails.id;this.contacts=this.contacts.filter(c=>c.name.toLowerCase()!=n.toLowerCase()),this.allContacts=this.contacts.filter(c=>c.name.toLowerCase()!=n.toLowerCase());let a={...this.userDetails,contacts:this.contacts};this._userService.updateUser(e,a).subscribe()}showAddContactForm(){this.showAddContact=!0}handleFavourite(n,e){let a=this._elemRef.nativeElement.querySelector(`#check-${e}`),c=this.userDetails.id;this.contacts=this.allContacts.map(h=>(h.name==n&&(h.favourite=a.checked),h));let p={...this.userDetails,contacts:this.contacts};this._userService.updateUser(c,p).subscribe();let g=this._elemRef.nativeElement.querySelector('input[name="list-type"]:checked')?.value;this.handleContactsType(g)}handleContactsType(n){switch(n){case"all":this._elemRef.nativeElement.querySelectorAll(".contact").forEach(e=>e.classList.add("hover")),this.contacts=this.allContacts;break;case"favourite":this._elemRef.nativeElement.querySelectorAll(".contact").forEach(e=>e.classList.remove("hover")),this.contacts=this.allContacts.filter(e=>{if(1==e.favourite)return e})}}handleAddContact(){this._commonService.showAddContact.next(!0)}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(f.v),t.Y36(d),t.Y36(t.SBq))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-contacts-home"]],decls:8,vars:4,consts:[[4,"ngIf"],[1,"wrapper","container","d-flex"],[1,"col-md-4","col-sm-12","col-12","profile"],[1,"col-md-8","col-sm-12","col-12","contacts"],["class","no-contact-wrapper",4,"ngIf"],[3,"userContacts"],[1,"head-wrapper","d-flex"],[1,"radio-wrapper"],["for","all"],["type","radio","name","list-type","value","all","id","all","checked","",3,"change"],["for","favourite"],["type","radio","name","list-type","value","favourite","id","favourite",3,"change"],[1,"contacts-wrapper","d-flex"],[4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-dark","mx-auto","my-3","mob-add-contact",3,"click"],[1,"contact","hover","d-flex",3,"ngClass"],[1,"profile-img"],[1,"action-wrapper"],[1,"btn","btn-sm","btn-dark",3,"click"],["type","checkbox",3,"id","checked","change"],[3,"for"],[1,"no-contact-wrapper"],[1,"btn","btn-sm","btn-primary",3,"click"]],template:function(e,a){1&e&&(t.YNc(0,M,2,0,"ng-container",0),t.TgZ(1,"div",1)(2,"div",2),t._UZ(3,"app-profile"),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,T,18,2,"ng-container",0),t.YNc(6,A,5,0,"div",4),t.YNc(7,k,1,0,"app-contacts-shimmer",0),t.qZA()()),2&e&&(t.Q6J("ngIf",a.showAddContact),t.xp6(5),t.Q6J("ngIf",!a.loading&&a.allContacts.length),t.xp6(1),t.Q6J("ngIf",!a.loading&&!a.allContacts.length),t.xp6(1),t.Q6J("ngIf",a.loading))},dependencies:[l.mk,l.sg,l.O5,v,b,P],styles:[".wrapper[_ngcontent-%COMP%]{flex-wrap:wrap}.mob-add-contact[_ngcontent-%COMP%]{display:block}@media (min-width: 768px){.mob-add-contact[_ngcontent-%COMP%]{display:none}}.no-contact-wrapper[_ngcontent-%COMP%]{text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.contacts-wrapper[_ngcontent-%COMP%]{flex-wrap:wrap;gap:15px}.contacts[_ngcontent-%COMP%]{padding-top:30px;position:relative;padding-left:30px;border-left:1px solid}@media only screen and (max-width: 767px){.contacts[_ngcontent-%COMP%]{border:none;padding-left:0}}.contacts[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{margin-bottom:10px;flex-direction:column;flex-basis:23%;text-align:center;box-shadow:#00000029 0 1px 4px,#333 0 0 0 3px;padding:15px 0;border-radius:8px;gap:10px;position:relative}@media only screen and (max-width: 767px){.contacts[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{flex-basis:48%;padding-top:30px;padding-bottom:30px}}.contacts[_ngcontent-%COMP%]   .contact.favourite[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .contacts[_ngcontent-%COMP%]   .contact.hover[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%]{display:block}.contacts[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.contacts[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]{color:red}.contacts[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:25px;transform:scale(1.7);position:absolute;top:0;right:15px;display:none}.head-wrapper[_ngcontent-%COMP%]{justify-content:space-between}.head-wrapper[_ngcontent-%COMP%]   .radio-wrapper[_ngcontent-%COMP%]{z-index:2;display:flex;gap:20px}.head-wrapper[_ngcontent-%COMP%]   .radio-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:7px}.headings[_ngcontent-%COMP%]{margin-bottom:15px}.profile-img[_ngcontent-%COMP%]{height:50px;width:50px;margin:auto;border-radius:50%;background-image:url(/assets/default-profile.jpg);background-size:cover;background-position:center center;background-repeat:no-repeat}"]})}return o})()},{path:"change-profile",component:(()=>{class o{constructor(n,e,a){this._userService=n,this._formBuilder=e,this._router=a,this.changeDetailsForm=this._formBuilder.group({name:["",i.kI.required],dob:["",i.kI.required],phone:["",i.kI.required]})}ngOnInit(){let n=localStorage.getItem("userId");this._userService.getPersonalData(n).subscribe(e=>{this.userDetails=e,this.changeDetailsForm.get("name")?.setValue(e.name),this.changeDetailsForm.get("dob")?.setValue(e.dob),this.changeDetailsForm.get("phone")?.setValue(e.phone)})}handleChange(){if(this.changeDetailsForm.valid){let n=prompt("Enter password to change details");if(n===this.userDetails.password){let e=localStorage.getItem("userId"),a={...this.changeDetailsForm.value,password:n,contacts:this.userDetails.contacts};this._userService.updateUser(e,a).subscribe(c=>{console.log(c),this._router.navigate(["/dashboard"])})}else alert("Invalid password ")}}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(d),t.Y36(i.qu),t.Y36(u.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-change-profile"]],decls:9,vars:1,consts:[[1,"wrapper"],[3,"formGroup","ngSubmit"],["type","text","formControlName","name","placeholder","Enter name"],["type","text","formControlName","phone","placeholder","Enter phone number"],["type","date","formControlName","dob","placeholder","Enter birth date"],[1,"btn","btn-sm","btn-primary"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Change Details"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return a.handleChange()}),t._UZ(4,"input",2)(5,"input",3)(6,"input",4),t.TgZ(7,"button",5),t._uU(8,"Submit"),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",a.changeDetailsForm))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".wrapper[_ngcontent-%COMP%]{text-align:center;margin-top:50px}.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;margin:auto;display:flex;flex-direction:column;row-gap:20px}.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:center}"]})}return o})()}]}];let U=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({providers:[l.Ov],imports:[l.ez,u.Bz.forChild(q),i.UX]})}return o})()}}]);