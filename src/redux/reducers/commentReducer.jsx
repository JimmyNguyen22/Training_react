const stateDefault = {
  commentInfo: {
    name: "",
    content: "",
  },
  arrComment: [
    { name: "Nguyễn thị bưởi", content: "like" },
    { name: "LÊ van A", content: "alo" },
  ],
};

export const commentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE": {
      // B1: lấy ra dữ liệu action gửi lên
      const { id, value } = action.payload;
      // B2: đối vối state là object hoặc array => clone state ra
      let commentInfoUpdate = { ...state.commentInfo };
      // B3: thay đổi state
      commentInfoUpdate[id] = value;
      // B4: gán state cũ bằng state update
      state.commentInfo = commentInfoUpdate;
      return { ...state };
    }
    case "HANDLE_SUBMIT": {
      // B1: lấy ra dữ liệu action gửi lên
      let comment = action.payload;
      // B2: đối vối state là object hoặc array => clone state ra
      let arrCommentUpdate = [...state.arrComment];
      arrCommentUpdate.push(comment);
      // Cập nhật state
      state.arrComment = arrCommentUpdate;
      console.log("arrComment", state.arrComment);
      return { ...state };
    }
    case "DELETE_COMMENT": {
      // B1: lấy dữ liệu từ payload
      let index = action.payload;
      // B2: clone state.arrComment và xữ lý
      let arrCommentUpdate = [...state.arrComment];
      arrCommentUpdate.splice(index, 1);
      // B3: cập nhật state
      state.arrComment = arrCommentUpdate;
      return { ...state };
    }
    case "EDIT_COMMENT": {
      // B1: lấy dữ liệu từ payload
      let index = action.payload;
      // B2: clone state.commentInfo và xử lý
      let commentInfoUpdate = { ...state.commentInfo };
      commentInfoUpdate = state.arrComment[index];
      // B3: cập nhật state
      state.commentInfo = commentInfoUpdate;
      return { ...state };
    }
    case "UPDATE_COMMENT": {
      // clone state.arrComment
      let arrCommentUpdate = [...state.arrComment];
      // Tìm comment có name và nd trong mảng ( Dựa vào name và content của state.commentInfo )
      let cmt = arrCommentUpdate.find(
        (comment) => comment.name === state.commentInfo.name
      );
      if (cmt) {
        cmt.content = state.commentInfo.content;
      }
      // Cập nhật state
      state.arrComment = arrCommentUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
