import React from "react";

const ButtonCompra = () => {
  return (
    <TouchableOpacity className="bg-pink-200 px-6 py-3 rounded-2xl flex-row items-center shadow-md">
      <Text className="text-black font-bold text-lg">COMPRA AHORA</Text>
      <View className="bg-black w-6 h-6 rounded-full flex items-center justify-center ml-2">
        <ArrowRight size={14} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCompra;
