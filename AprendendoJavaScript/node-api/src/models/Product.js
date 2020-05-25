const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true, //required:true - Campo se torna obrigatorio
    },
    description: {
        type: String,
        required:true,
    },
    url:{
        type: String,
        required:true
    },

    createdAt:{
        type: Date,
        default: Date.now,
        
    },
});
ProductSchema.plugin(mongoosePaginate);
mongoose.model('Product', ProductSchema); // registrando o model na nossa aplicação, agora toda a nossa aplicação sabe que existe esse model na app com essas propriedades
