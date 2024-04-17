const myslug = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Thay dấu cách bằng dấu gạch ngang
      .replace(/[^\w\-]+/g, '') // Loại bỏ các ký tự không phải chữ cái, số, hoặc gạch ngang
      .replace(/\-\-+/g, '-') // Loại bỏ các dấu gạch ngang liên tiếp
      .replace(/^-+/, '') // Loại bỏ dấu gạch ngang ở đầu
      .replace(/-+$/, ''); // Loại bỏ dấu gạch ngang ở cuối
  };
  
  module.exports = myslug;
  