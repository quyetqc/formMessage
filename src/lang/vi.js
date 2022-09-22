module.exports = {
    COMMON: {
        NO_CONTENT_DATA_MSG: 'Không có nội dung được cập nhật',
        REQUEST_ID_NOT_FOUND: 'ID không hợp lệ',
        EMPTY_DATA_MSG: 'Danh sách rỗng, không có dữ liệu',
        INVALID_DATA_MSG: 'Dữ liệu không hợp lệ',
        MIN_LENGTH_FORMAT_MSG: 'Ít nhất %length% ký tự',
        MAX_LENGTH_FORMAT_MSG: 'Tối đa %length% ký tự',
        INVALID_REQUEST_DATA_MSG: 'Dữ liệu không hợp lệ',
        INVALID_DATE_MSG: 'Ngày không hợp lệ',
        FIELD_REQUIRED_MSG: '%field% không tồn tại',
        INVALID_FIELD_VALUE_MSG: 'Giá trị của %field% không hợp lệ',
        FIELD_EMPTY_MSG: '%field% không thể bỏ trống',
        INVALID_EMAIL_MSG: 'Địa chỉ email không hợp lệ',
    },
    AUTH: {
        AUTH_SUCCESS_MSG: 'Đã xác thực thành công!',
        AUTH_FAIL_MSG: 'Sai thông tin đăng nhập, vui lòng thử lại',
        INVALID_EMAIL_MSG: 'Địa chỉ email không hợp lệ',
        ACCESS_DENIED_MSG: 'Truy cập bị từ chối',
        INVALID_OAUTH2_TOKEN_MSG: 'OAuth2 token không hợp lệ',
        LIMIT_LOGIN_MSG: 'Số lần đăng nhập còn lại: %number%',
        USER_BLOCKED_MSG: 'Tài khoản %username% đã bị khoá',
        ACCESS_DENIED_UPDATE_SELF_GROUP_MSG: 'Bạn không thể cập nhật nhóm cho mình',
        ACCESS_DENIED_UPDATE_OTHER_USER_MSG: 'Bạn không thể cập nhật cho mình hoặc thành viên cấp cao hơn',
        ACCESS_DENIED_CREATE_HIGHER: 'Bạn không thể tạo mới thành viên cấp cao hơn',
        USER_NO_GROUP_MSG: 'Thành viên chưa thuộc nhóm nào hết',
        ACCESS_DENIED_UPDATE_SELF_STATUS_MSG: 'Bạn không thể tự cập nhật trạng thái cho chính mình',
        ACCESS_TOKEN_EXPRIED_MSG: 'Token xác thực đã hết hạn, vui lòng đăng nhập lại',
        ACTIVITY_LOGGED: 'Đã đăng nhập vào lúc %actionDate%',
    },
    USER: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin người dùng được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách người dùng được tìm thấy',
        NOT_FOUND_MSG: 'Người dùng không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới người dùng thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới người dùng',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin người dùng thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin người dùng',
        DELETE_SUCCESS_MSG: 'Xoá người dùng thành công',
        DELETE_FAIL_MSG: 'Không thể xoá người dùng',
        PWD_EMPTY_MSG: 'Mật khẩu không được bỏ trống',
        PWD_NOT_MATCH_MSG: 'Mật khẩu không khớp',
        WRONG_OLD_PWD_MSG: 'Mật khẩu hiện tại không đúng',
        NEW_PWD_SAME_OLD_PWD_MSG: 'Mật khẩu mới phải khác với mật khẩu cũ',
        USERNAME_EMPTY_MSG: 'Tên đăng nhập không được bỏ trống',
        USERNAME_EXISTS_MSG: 'Tên đăng nhập %username% đã tồn tại',
        EMAILS_EMPTY_MSG: 'Địa chỉ email không được bỏ trống',
        USER_EMAIL_EXISTS_MSG: 'Địa chỉ email %email% đã tồn tại',
        FULLNAME_EMPTY_MSG: 'Tên bạn không được bỏ trống',
        INVALID_EMAIL_MSG: 'Địa chỉ email không hợp lệ',
        CHANGE_PWD_FAIL_MSG: 'Đổi mật khẩu thất bại',
        CHANGE_PWD_SUCCESS_MSG: 'Đổi mật khẩu thành công',
        RESET_PWD_SUCCESS_MSG: 'Mật khẩu mới được gửi tới địa chỉ email: %email%',
        RESET_PWD_EMAIL_SUBJECT: 'Mật khẩu đăng nhập mới của bạn',
        RESET_PWD_INVALID_TOKEN_MSG: 'Token không hợp lệ hoặc đã hết hạn',
        YOUR_ACCOUNT_EMAIL_SUBJECT: 'Thông tin tài khoản REE Monitoring System của bạn',
        TOKEN_VERIFIED_MSG: 'Đã xác thực thành công',
        ACTIVITY_CREATED: 'Đã tạo tài khoản mới %username% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật tài khoản %username% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá tài khoản %username% vào lúc %actionDate%',
    },
    PROJECT: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin dự án được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách dự án được tìm thấy',
        NOT_FOUND_MSG: 'Dự án không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới dự án thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới dự án',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin dự án thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin dự án',
        DELETE_SUCCESS_MSG: 'Xoá dự án thành công',
        DELETE_FAIL_MSG: 'Không thể xoá dự án',
        GET_PENDING_SUCCESS_MSG: 'Danh sách các dự án đang chờ tạo mới',
        PENDING_NOT_FOUND: 'Không có dự án nào',
        NOTHING_TO_CREATE_MSG: 'Không có thiết bị nào đang chờ để tạo mới dự án',
        INVALID_DATA_MSG: 'Dữ liệu không hợp lệ, không thể bỏ trống các trường hợp: typeDevice, manufacturer',
        APPROVED_SUCCESS_MSG: 'Dự án được xác nhận và kích hoạt thành công',
        NO_DEVICES_TO_ADD_MSG: 'Không tìm thấy thiết bị nào để thêm vào dự án',
        INVALID_DEVICE_IDS_MSG: 'Danh sách các thiết bị bị trùng lặp hoặc một trong các thiết bị không tồn tại',
        ADD_DEVICES_SUCCESS_MSG: 'Thêm các thiết bị vào dự án thành công',
        ACTIVITY_CREATED: 'Đã tạo dự án mới %name% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật dự án %name% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá dự án %name% vào lúc %actionDate%',
        INACTIVE_MSG: 'Dự án đã khoá',
        NO_ACTIVE_DEVICES_MSG: 'Không có thiết bị khả dụng cho dự án',
        BAD_EMAILS_MANAGER_MSG: 'Định dạng danh sách email quản trị không hợp lệ',
    },
    CUSTOMER: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin khách hàng được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách khách hàng được tìm thấy',
        NOT_FOUND_MSG: 'Khách hàng không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới khách hàng thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới khách hàng',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin khách hàng thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin khách hàng',
        DELETE_SUCCESS_MSG: 'Xoá khách hàng thành công',
        DELETE_FAIL_MSG: 'Không thể xoá khách hàng',
        ACTIVITY_CREATED: 'Đã tạo khách hàng mới %fullName% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật khách hàng %fullName% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá khách hàng %fullName% vào lúc %actionDate%',
    },
    DEVICE: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin thiết bị được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách thiết bị được tìm thấy',
        NOT_FOUND_MSG: 'Thiết bị không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới thiết bị thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới thiết bị',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin thiết bị thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin thiết bị',
        DELETE_SUCCESS_MSG: 'Xoá thiết bị thành công',
        DELETE_FAIL_MSG: 'Không thể xoá thiết bị',
        INVALID_DATA_MSG: 'Dữ liệu không hợp lệ, không thể bỏ trống các trường hợp: typeDevice, typeModel, serialNumber',
        DUPPLICATE_MSG: 'Thiết bị đã tồn tại: serial: %serialNumber%',
        INVALID_IMPORT_DATA_MSG: 'Dữ liệu không hợp lệ hoặc bị trùng lặp, vui lòng kiểm tra lại',
        INVERTER_SERIAL_NOT_EXISTS_MSG: 'Không tồn tại inverter serial number: %serialNumber%',
        PANEL_INSERT_SUCCESS_MSG: 'Lưu thành công %number% tấm panel',
        INVALID_DEVICE_ID_INFO: 'Không thể tạo device ID, các giá trị không hợp lệ: serialNumber[bắt buộc] hoặc typeDevice[1,2,3,4] hoặc typeModel[1,2,3,4,5]',
        PANEL_IDS_EXISTS_MSG: 'Tấm panel ID đã tồn tại: %ids%',
        ALL_PANELS_DELETED: 'Đã xoá hết các tấm pin của thiết bị %deviceId%',
        ACTIVITY_CREATED: 'Đã tạo thiết bị mới %name%, SN: %serialNumber% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật thiết bị %name%, SN: %serialNumber% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá thiết bị %name%, SN: %serialNumber% vào lúc %actionDate%',
    },
    METER: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin đồng hồ được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách đồng hồ được tìm thấy',
        NOT_FOUND_MSG: 'Đồng hồ không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới đồng hồ thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới đồng hồ',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin đồng hồ thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin đồng hồ',
        DELETE_SUCCESS_MSG: 'Xoá đồng hồ thành công',
        DELETE_FAIL_MSG: 'Không thể xoá đồng hồ',
        ACTIVITY_CREATED: 'Đã tạo monitoring meter mới %deviceId% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật monitoring meter %deviceId% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá monitoring meter %deviceId% vào lúc %actionDate%',
    },
    INVERTER: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin biến tần được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách biến tần được tìm thấy',
        NOT_FOUND_MSG: 'Biến tần không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới biến tần thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới biến tần',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin biến tần thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin biến tần',
        DELETE_SUCCESS_MSG: 'Xoá biến tần thành công',
        DELETE_FAIL_MSG: 'Không thể xoá biến tần',
        ACTIVITY_CREATED: 'Đã tạo monitoring inverter mới %deviceId% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật monitoring inverter %deviceId% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá monitoring inverter %deviceId% vào lúc %actionDate%',
    },
    INVERTER_TYPE: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin loại biến tần được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách loại biến tần được tìm thấy',
        NOT_FOUND_MSG: 'loại biến tần không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới loại biến tần thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới loại biến tần',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin loại biến tần thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin loại biến tần',
        DELETE_SUCCESS_MSG: 'Xoá loại biến tần thành công',
        DELETE_FAIL_MSG: 'Không thể xoá loại biến tần',
        DUPPLICATE_MODEL_MSG: 'Model[%model%] đã tồn tại',
        HAS_PANEL_CANT_DELETE_MSG: 'Không thể xoá loại biến tần đang được sử dụng',
        ACTIVITY_CREATED: 'Đã tạo inverter type mới %deviceId% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật inverter type %deviceId% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá inverter type %deviceId% vào lúc %actionDate%',
    },
    PANEL_TYPE: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin loại tấm pin được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách loại tấm pin được tìm thấy',
        NOT_FOUND_MSG: 'loại tấm pin không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới loại tấm pin thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới loại tấm pin',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin loại tấm pin thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin loại tấm pin',
        DELETE_SUCCESS_MSG: 'Xoá loại tấm pin thành công',
        DELETE_FAIL_MSG: 'Không thể xoá loại tấm pin',
        DUPPLICATE_MODEL_MSG: 'Model[%model%] đã tồn tại',
        MODEL_NOT_EXISTS_MSG: 'Model[%model%] không tồn tại',
        MODEL_NOT_UNIQUE_MSG: 'Các model tấm PIN bị trùng',
        HAS_PANEL_CANT_DELETE_MSG: 'Không thể xoá loại tấm pin đang được sử dụng',
        ACTIVITY_CREATED: 'Đã tạo panel type mới %deviceId% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật panel type %deviceId% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá panel type %deviceId% vào lúc %actionDate%',
    },
    SENSOR: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin cảm biến 1 được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách cảm biến 1 được tìm thấy',
        NOT_FOUND_MSG: 'cảm biến 1 không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới cảm biến 1 thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới cảm biến 1',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin cảm biến 1 thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin cảm biến 1',
        DELETE_SUCCESS_MSG: 'Xoá cảm biến 1 thành công',
        DELETE_FAIL_MSG: 'Không thể xoá cảm biến 1',
        ACTIVITY_CREATED: 'Đã tạo cảm biến 1 mới %deviceId% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật cảm biến 1 %deviceId% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá cảm biến 1 %deviceId% vào lúc %actionDate%',
    },
    ROLE: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin vai trò được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách vai trò được tìm thấy',
        NOT_FOUND_MSG: 'Vai trò không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới vai trò thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới vai trò',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin vai trò thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin vai trò',
        DELETE_SUCCESS_MSG: 'Xoá vai trò thành công',
        DELETE_FAIL_MSG: 'Không thể xoá vai trò',
        ACTIVITY_CREATED: 'Đã tạo quyền tài khoản mới %name% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật quyền tài khoản %name% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá quyền tài khoản %name% vào lúc %actionDate%',
    },
    GROUP: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin nhóm thành viên được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách nhóm thành viên được tìm thấy',
        NOT_FOUND_MSG: 'Nhóm thành viên không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới nhóm thành viên thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới nhóm thành viên',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin nhóm thành viên thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin nhóm thành viên',
        DELETE_SUCCESS_MSG: 'Xoá nhóm thành viên thành công',
        DELETE_FAIL_MSG: 'Không thể xoá nhóm thành viên',
        ACTIVITY_CREATED: 'Đã tạo nhóm thành viên mới %name% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật nhóm thành viên %name% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá nhóm thành viên %name% vào lúc %actionDate%',
    },
    USER_SETTING: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin cài đặt người dùng được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách cài đặt người dùng được tìm thấy',
        NOT_FOUND_MSG: 'Cài đặt người dùng không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới cài đặt người dùng thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới cài đặt người dùng',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin cài đặt người dùng thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin cài đặt người dùng',
        DELETE_SUCCESS_MSG: 'Xoá cài đặt người dùng thành công',
        DELETE_FAIL_MSG: 'Không thể xoá cài đặt người dùng',
        ACTIVITY_CREATED: 'Đã tạo cài đặt người dùng mới vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật cài đặt người dùng vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá cài đặt người dùng vào lúc %actionDate%',
    },
    ALERT: {
        GET_ITEM_SUCCESS_MSG: 'Thông báo được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách thông báo được tìm thấy',
        NOT_FOUND_MSG: 'Thông báo không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới thông báo thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới thông báo',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông báo thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông báo',
        DELETE_SUCCESS_MSG: 'Xoá thông báo thành công',
        DELETE_FAIL_MSG: 'Không thể xoá thông báo',
        VALUE_MUST_BE_NUMBER_MSG: 'Chỉ số thông báo phải là số thực dương',
        SEND_EMAIL_SUBJECT: 'Thông tin thông báo từ REE Monitoring System',
        MARK_READ_ITEMS_SUCCESS: 'Đã chuyển các thông báo thành đã đọc thành công',
        ACTIVITY_CREATED: 'Đã tạo thông báo mới vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật thông báo vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá thông báo vào lúc %actionDate%',
    },
    ACTIVITY: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin nhật ký hệ thống được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách nhật ký hệ thống được tìm thấy',
    },
    MEDIA: {
        NO_FILE_UPLOAD_MSG: 'Không có tập tin tải lên',
        UPLOAD_SUCCESS_MSG: 'Tập tin tải lên thành công',
        UPLOAD_ERROR_MSG: 'Tập tin tải lên thất bại',
        FILE_NOT_FOUND: 'Không tìm thấy tập tin',
        FILES_NOT_FOUND: 'Không tìm thấy tập tin',
        DELETE_FILE_SUCCESS_MSG: 'Xoá tập tin thành công',
        GET_LIST_FILE_SUCCESS_MSG: 'Danh sách tập tin được tìm thấy',
    },
    CONTACT: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin liên hệ được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách thông tin liên hệ được tìm thấy',
        NOT_FOUND_MSG: 'Thông tin liên hệ không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới thông tin liên hệ thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới thông tin liên hệ',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin liên hệ thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin liên hệ',
        DELETE_SUCCESS_MSG: 'Xoá thông tin liên hệ thành công',
        DELETE_FAIL_MSG: 'Không thể xoá thông tin liên hệ',
        ACTIVITY_CREATED: 'Đã tạo thông tin liên hệ %fullName%  vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật thông tin liên hệ %fullName% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá thông tin liên hệ %fullName% vào lúc %actionDate%',
    },
    CONTRACT: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin hợp đồng được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách thông tin hợp đồng được tìm thấy',
        NOT_FOUND_MSG: 'Thông tin hợp đồng không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới thông tin hợp đồng thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới thông tin hợp đồng',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin hợp đồng thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin hợp đồng',
        DELETE_SUCCESS_MSG: 'Xoá thông tin hợp đồng thành công',
        DELETE_FAIL_MSG: 'Không thể xoá thông tin hợp đồng',
        ACTIVITY_CREATED: 'Đã tạo thông tin hợp đồng %fullName% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật thông tin hợp đồng %fullName% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá thông tin hợp đồng %fullName% vào lúc %actionDate%',
    },
    ELECTRICITY: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin điện lực được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách thông tin điện lực được tìm thấy',
        NOT_FOUND_MSG: 'Thông tin điện lực không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới thông tin điện lực thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới thông điện lực hệ',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin điện lực thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin điện lực',
        DELETE_SUCCESS_MSG: 'Xoá thông tin điện lực thành công',
        DELETE_FAIL_MSG: 'Không thể xoá thông tin điện lực',
        ACTIVITY_CREATED: 'Đã tạo thông tin điện lực %name% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật thông tin điện lực %name% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá thông tin điện lực %name% vào lúc %actionDate%',
    },
    INDUSTRIAL: {
        GET_ITEM_SUCCESS_MSG: 'Thông tin khu công nghiệp được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách thông tin khu công nghiệp được tìm thấy',
        NOT_FOUND_MSG: 'Thông tin khu công nghiệp không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới thông tin khu công nghiệp thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới thông khu công nghiệp',
        UPDATE_SUCCESS_MSG: 'Cập nhật thông tin khu công nghiệp thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật thông tin khu công nghiệp',
        DELETE_SUCCESS_MSG: 'Xoá thông tin khu công nghiệp thành công',
        DELETE_FAIL_MSG: 'Không thể xoá thông tin khu công nghiệp',
        ACTIVITY_CREATED: 'Đã tạo thông tin khu công nghiệp %name% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật thông tin khu công nghiệp %name% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá thông tin khu công nghiệp %name% vào lúc %actionDate%',
    },
    EMAIL: {
        HI: 'Xin chào',
        GREETING_DESC: 'Hy vọng bạn sẽ hài lòng sử dụng các dịch vụ của chúng tôi',
        REGARDS: 'Trân trọng',
        LOGIN: 'Đăng nhập',
        SUPPORT: 'Hỗ trợ',
        NO_REPLACE_DESC: 'Vui lòng không phản hồi email này',
        DEVICE: 'Thiết bị',
        MANAGER: 'Quản Trị Viên',
    },
    INVESTOR: {
        GET_ITEM_SUCCESS_MSG: 'Nhà đầu tư được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách nhà đầu tư được tìm thấy',
        NOT_FOUND_MSG: 'Nhà đầu tư không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới nhà đầu tư thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới nhà đầu tư',
        UPDATE_SUCCESS_MSG: 'Cập nhật nhà đầu tư thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật nhà đầu tư',
        DELETE_SUCCESS_MSG: 'Xoá nhà đầu tư thành công',
        DELETE_FAIL_MSG: 'Không thể xoá nhà đầu tư',
        ACTIVITY_CREATED: 'Đã tạo nhà đầu tư %name% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật nhà đầu tư %name% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá nhà đầu tư %name% vào lúc %actionDate%',
    },
    USER_FILTER: {
        GET_ITEM_SUCCESS_MSG: 'Mẫu bộ lọc được tìm thấy',
        GET_LIST_SUCCESS_MSG: 'Danh sách mẫu bộ lọc được tìm thấy',
        NOT_FOUND_MSG: 'Mẫu bộ lọc không tồn tại',
        CREATE_SUCCESS_MSG: 'Tạo mới mẫu bộ lọc thành công',
        CREATE_FAIL_MSG: 'Không thể tạo mới mẫu bộ lọc',
        UPDATE_SUCCESS_MSG: 'Cập nhật bộ lọc thành công',
        UPDATE_FAIL_MSG: 'Không thể cập nhật mẫu bộ lọc',
        DELETE_SUCCESS_MSG: 'Xoá mẫu bộ lọc thành công',
        DELETE_FAIL_MSG: 'Không thể xoá mẫu bộ lọc',
        ACTIVITY_CREATED: 'Đã tạo mẫu bộ lọc %name% vào lúc %actionDate%',
        ACTIVITY_UPDATED: 'Đã cập nhật mẫu bộ lọc %name% vào lúc %actionDate%',
        ACTIVITY_DELETED: 'Đã xoá mẫu bộ lọc %name% vào lúc %actionDate%',
    },
};
