/**
 * 自动导入svg文件
 * @author dongyu
 * created at 2018/10/30
 */

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('../assets/svg', false, /\.svg$/);
requireAll(req);
