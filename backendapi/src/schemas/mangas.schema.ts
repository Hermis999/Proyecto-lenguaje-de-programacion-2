import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class manga {
    @Prop({
        trim: true
    })
    img: string;
    
    @Prop({
        unique: true,
        required: true,
        trim: true      // trim Retira los espacios del inicio y el
    })                  // final de una cadena
    title: string;

    @Prop({
        required: true,
        min: 0
    })
    price: number;
    
    @Prop({
        required: true
    })
    stock: number;

    @Prop({
        trim: true
    })
    description: string;

    @Prop({
        
    })
    status: boolean;
}
export const mangaSchema = SchemaFactory.createForClass(manga)
