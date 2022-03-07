import Input from '../Input';
import React, {useEffect, useMemo, useState} from 'react';
import { daData } from '../../functions/daData';

function SecondExample() {
  const [innOrName, setInnOrName]=useState("")
  const [dataList, setDataList]=useState({});
  const [data, setData]=useState({});
  const [form, setForm]=useState({smallName:"", name: '', inn:'', adress:''})
  
  useEffect(()=>{
    daData(innOrName, setDataList );
  },[innOrName])

  const renderDataList = useMemo(()=>{
      if(Object.keys(dataList).length){
        return dataList.map((item, index)=>{
            return <li key={item.value + index}> <button onClick={()=>setData(item)} >{item.value}</button>  </li>
        })
      }
  }, [dataList])

  useEffect(()=>{
    if(Object.keys(data).length){
      setForm({smallName:dataList[0].data.name.short_with_opf, name: dataList[0].data.name.full_with_opf, inn: dataList[0].data.inn + ' / ' + dataList[0].data.kpp, adress: dataList[0].data.address.value });
      setDataList({});
    }
  },[data])

  const onChange =(name, e)=>{
    setForm((prevState)=>{
      return {...prevState, [name]: e}
    })
  }
  return (
    <div>
        <h2>Пример со списком</h2>
        <Input label='Компания или ИП' value={innOrName} onChange={setInnOrName}/>
        <ul>{renderDataList}</ul>
        <Input label='Краткое наименование' value={form.smallName} onChange={(e)=>onChange('smallName',e)}/>
        <Input label='Полное наименование' value={form.name} onChange={(e)=>onChange('name',e)}/>
        <Input label='ИНН / КПП'  value={form.inn} onChange={(e)=>onChange('inn',e)}/>
        <Input label='Адрес' value={form.adress} onChange={(e)=>onChange('adress',e)}/>
    </div>
  );
}

export default SecondExample;