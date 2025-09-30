import supabase, { supabaseUrl } from "./supaBase";

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
  if (error) throw new Error(" Cabin not deleted");
}
async function addCabin(newCabin) {
  // https://gbcwnzekjaofobfrmdhw.supabase.co/storage/v1/object/public/cabins/cabin-001.jpg
  // const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
  //   "/",
  //   ""
  // );
  // const url = `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin }])
    .select();
  if (error) throw new Error(" Cabin not created");

  // const {  error:fileError } = await supabase.storage
  //   .from("cabins")
  //   .upload(imageName, newCabin.image);
  // if (fileError) {
  //   // Handle error
  //   await deleteCabin(data.id)
  // } else {
  //   // Handle success
  // }

  return data;
}
export { getCabins, deleteCabin, addCabin };
