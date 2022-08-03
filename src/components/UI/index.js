//Простой способ импорта ui компонентов, для того чтобы не использовать каждый раз импорт обьектов

import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";
import MyDialog from "@/components/UI/MyDialog";

export default [
    MyButton,
    MyInput,
    MyDialog
]