export default function Blog() {
  return (
    <div className="blog-container" style={{ padding: '20px' }}>
      <h1>📝 Blog & Tin Tức</h1>
      <p>Cập nhật những thông tin và xu hướng mới nhất tại đây.</p>
      
      {/* Khung chứa bài viết mẫu */}
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>Bài viết số 1: Hướng dẫn sử dụng dịch vụ</h3>
        <p>Nội dung tóm tắt của bài viết sẽ nằm ở đây...</p>
        <button>Đọc tiếp</button>
      </div>
    </div>
  );
}