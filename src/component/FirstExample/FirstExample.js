import Input from '../Input';
import React, {useEffect, useState} from 'react';

function FirstExample() {
  const [innOrName, setInnOrName]=useState("")
  const [dataList, setDataList]=useState({});
  const [form, setForm]=useState({smallName:"", name: '', inn:'', adress:''})
  
  useEffect(()=>{
    if(Object.keys(dataList).length){
      setForm({smallName:dataList[0].data.name.short_with_opf, name: dataList[0].data.name.full_with_opf, inn: dataList[0].data.inn + ' / ' + dataList[0].data.kpp, adress: dataList[0].data.address.value })
    }else{
      setForm({smallName:'', name: '', inn:'', adress:''})
    }
  },[dataList])

  const onChange =(name, e)=>{
    setForm((prevState)=>{
      return {...prevState, [name]: e}
    })
  }
  return (
    <div>
        <h2>Пример без списка</h2>
       <Input action={true} setDataList={setDataList} label='Компания или ИП' value={innOrName} onChange={setInnOrName}/>
       <Input label='Краткое наименование' value={form.smallName} onChange={(e)=>onChange('smallName',e)}/>
       <Input label='Полное наименование' value={form.name} onChange={(e)=>onChange('name',e)}/>
       <Input label='ИНН / КПП'  value={form.inn} onChange={(e)=>onChange('inn',e)}/>
       <Input label='Адрес' value={form.adress} onChange={(e)=>onChange('adress',e)}/>
    </div>
  );
}

export default FirstExample;