using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(string id);
        Task<User> GetUsername(string username);
        Task<User> PostUser(User user);
        void EditUser(User user);
        Task<bool> SaveAllAsync();
    }
}