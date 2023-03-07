export module IdGenerate{
   const _index={id:0};
   
   export function generate(){
     _index.id++;
     return _index.id;
   }

}