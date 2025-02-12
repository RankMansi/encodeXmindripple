import { supabase } from "@/lib/supabaseClient"


export default async function handler(req,res) {
    if(req.method == "POST") {
        console.log(req.body)

const { error } = await supabase
  .from('Riddle')
  .insert({ 
    question: req.body.question ,
    answer: req.body.answer 
  })
  if(error) {
    console.log(error)
    return res.status(500).json('Unable to nadd riddle.')
  }
  return res.status(200).json({msg: 'Riddle stored in DB'})
  }
}

  
