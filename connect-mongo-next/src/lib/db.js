const {uname,password}=process.env
export const connectionSrt="mongodb+srv://"+uname+":"+password+"@cluster0.nxhkbhi.mongodb.net/productDB?retryWrites=true&w=majority";