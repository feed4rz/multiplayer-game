function import_dep(src){
  let imported = document.createElement('script');
  imported.src = src;
  document.body.appendChild(imported);
}

/* Import dependencies */
/* Classes */
import_dep('/js/lib/classes/entity.js');
import_dep('/js/lib/classes/entitymanager.js');
import_dep('/js/lib/classes/renderer.js');