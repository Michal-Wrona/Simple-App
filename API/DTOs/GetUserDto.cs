namespace API.DTOs
{
    public class GetUserDto
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Address { get; set; }
        public string Category { get; set; }
        public string Email { get; set; }
        public int PhoneNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}