const myslug = (text) => {
  const vnAccentsMap = {
    áàảãạăắằẳẵặâấầẩẫậ: "a",
    éèẻẽẹêếềểễệ: "e",
    íìỉĩị: "i",
    óòỏõọôốồổỗộơớờởỡợ: "o",
    úùủũụưứừửữự: "u",
    ýỳỷỹỵ: "y",
    đ: "d",
  };

  // Chuyển đổi các ký tự tiếng Việt có dấu thành ký tự tiếng Anh không dấu
  const convertToEnglish = (char) => {
    for (let accents in vnAccentsMap) {
      if (accents.includes(char)) {
        return vnAccentsMap[accents];
      }
    }
    return char;
  };

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/./g, convertToEnglish) // Chuyển đổi từng ký tự thành tiếng Anh không dấu
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

module.exports = myslug;
