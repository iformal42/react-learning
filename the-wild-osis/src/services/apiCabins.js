import supabase from "./supaBase";

async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error(error);
  }
  return cabins;
}
async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if(error)
    throw new Error(" Cabin not deleted");
    
}
export { getCabins, deleteCabin };
