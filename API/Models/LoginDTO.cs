﻿using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class LoginDTO
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
