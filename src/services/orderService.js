const { Order, User } = require('../models');

exports.getOrder = async () => {
  return await Order.findAll({
    include: {
      model: User,
      attributes: ['id', 'username']
    }
  });
};

exports.createOrder = async (data) => {
  return await Order.create(data);
};

exports.updateOrder = async (id, updatedData) => {
  const order = await Order.findByPk(id);
  if (!order) throw new Error('Order not found');

  await order.update(updatedData);
  return order;
};


exports.deleteOrder = async (id) => {
  const order = await Order.findByPk(id);
  if (!order) throw new Error('Order not found');

  await order.destroy();
  return { message: 'Order deleted successfully' };
};
